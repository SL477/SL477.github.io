/**
 * Simple, modern audio synthesis library.
 * Uses the Web Audio API for generation, and exposes a small, stable public API.
 *
 * @module audio-synth
 */

/**
 * Frequency mapping for note names.
 * @private
 */
const NOTE_FREQUENCIES = {
  C: 261.63,  'C#': 277.18, D: 293.66,  'D#': 311.13,
  E: 329.63,  F: 349.23,  'F#': 369.99, G: 392.00,
  'G#': 415.30, A: 440.00,  'A#': 466.16, B: 493.88
};

/**
 * Build a minimal 16‑bit PCM WAV header.
 * @private
 */
function buildWavHeader(sampleRate, channels, numSamples){
	const byteRate = sampleRate * channels * 16 / 8;
  const blockAlign = channels * 16 / 8;
  const subChunk2Size = numSamples * channels * 16 / 8;
  const chunkSize = 36 + subChunk2Size;

  const header = new Uint8Array(44);
  const dv = new DataView(header.buffer);

  // RIFF
  dv.setUint32(0, 0x52494646, false); // 'RIFF'
  dv.setUint32(4, chunkSize, true);
  dv.setUint32(8, 0x57415645, false); // 'WAVE'

  // fmt subchunk
  dv.setUint32(12, 0x666d7420, false); // 'fmt '
  dv.setUint32(16, 16, true);          // subchunk1Size
  dv.setUint16(20, 1, true);           // audioFormat (PCM)
  dv.setUint16(22, channels, true);
  dv.setUint32(24, sampleRate, true);
  dv.setUint32(28, byteRate, true);
  dv.setUint16(32, blockAlign, true);
  dv.setUint16(34, 16, true);          // bitsPerSample

  // data subchunk
  dv.setUint32(36, 0x64617461, false); // 'data'
  dv.setUint32(40, subChunk2Size, true);

  return header;
}

/**
 * Converts an AudioBuffer to a Blob that can be downloaded or used as a data URI.
 * @private
 */
function audioBufferToWavBlob(buffer) {
	const numSamples = buffer.length;
  const header = buildWavHeader(buffer.sampleRate, buffer.numberOfChannels, numSamples);

  // Interleave channels and convert to 16‑bit PCM
  const interleaved = new Int16Array(numSamples * buffer.numberOfChannels);
  const channelData = [];
  for (let ch = 0; ch < buffer.numberOfChannels; ch++) {
    channelData.push(buffer.getChannelData(ch));
  }

  let offset = 0;
  for (let i = 0; i < numSamples; i++) {
    for (let ch = 0; ch < buffer.numberOfChannels; ch++) {
      const sample = Math.max(-1, Math.min(1, channelData[ch][i])); // clamp
      interleaved[offset++] = sample < 0 ? sample * 0x8000 : sample * 0x7FFF;
    }
  }
  return new Blob([header, interleaved.buffer], { type: 'audio/wav' });
}

/**
 * Represents a single instrument (e.g. piano, organ).
 */
export class AudioSynthInstrument {
  /**
   * @param {AudioSynth} parent
   * @param {string} name
   * @param {number} index
   */
  constructor(parent, name, index) {
    this.#parent = parent;
    this.name = name;
    this.#soundId = index;
  }

  /** @private */
  #parent;
  /** @private */
  #soundId;

  play(note, octave, duration) {
    return this.#parent.play(this.#soundId, note, octave, duration);
  }

  /** Returns a data URI for the generated sound. */
  generate(note, octave, duration) {
    return this.#parent.generate(this.#soundId, note, octave, duration);
  }
}

/**
 * Main synthesizer.
 */
export class AudioSynth {
  /** @private */
  #ctx;
  /** @private */
  #sampleRate = 44100;
  /** @private */
  #volume = 0.5;   // 0.0 .. 1.0
  /** @private */
  #sounds = [];        // array of profiles
  /** @private */
  #modFunctions = [];  // modulation functions
  /** @private */
  #debug = false;
  /** @private */
  #cache = new Map(); // key -> Blob URL

  constructor() {
    this.#ctx = new (window.AudioContext || window.webkitAudioContext)();
    this.loadModulationFunctions(...DEFAULT_MODS);
  }

  setSampleRate(v) {
    this.#sampleRate = Math.min(44100, Math.max(4000, v | 0));
    this.#clearCache();
    return this.#sampleRate;
  }

  getSampleRate() {
    return this.#sampleRate;
  }

  setVolume(v) {
    const val = Number(v);
    this.#volume = Math.max(0, Math.min(1, isNaN(val) ? 0 : val));
    this.#clearCache();
    return this.#volume;
  }

  getVolume() {
    return this.#volume;
  }

  debug() {
    this.#debug = true;
  }

  loadSoundProfile(...profiles) {
    for (const p of profiles) {
      if (typeof p !== 'object' || !p.name) {
        throw new Error('Invalid sound profile');
      }
      this.#sounds.push(p);
    }
    this.#clearCache();
    return true;
  }

  loadModulationFunctions(...mods) {
    for (const fn of mods) {
      if (typeof fn !== 'function') {
        throw new Error('Modulation functions must be functions');
      }
      this.#modFunctions.push(fn);
    }
    return true;
  }

  listSounds() {
    return this.#sounds.map(s => s.name);
  }

  createInstrument(nameOrId) {
    const idx = typeof nameOrId === 'number'
      ? nameOrId
      : this.#sounds.findIndex(s => s.name === nameOrId);

    if (idx < 0 || idx >= this.#sounds.length) {
      throw new Error(`Invalid sound or sound ID: ${nameOrId}`);
    }

    return new AudioSynthInstrument(this, this.#sounds[idx].name, idx);
  }

  /**
   * Generates an audio buffer, caches the Blob URL, and returns it.
   *
   * @param {number} soundIndex
   * @param {string} note
   * @param {number} octave
   * @param {number} duration Seconds
   */
  generate(soundIndex, note, octave, duration) {
    const profile = this.#sounds[soundIndex];
    if (!profile) throw new Error(`Invalid sound ID ${soundIndex}`);

    const key = `${soundIndex}|${note}|${octave}|${duration}`;
    if (this.#cache.has(key)) {
      if (this.#debug) console.timeEnd('cached generate');
      return this.#cache.get(key);
    }

    const freq = NOTE_FREQUENCIES[note];
    if (typeof freq !== 'number') throw new Error(`Invalid note ${note}`);

    const attack = profile.attack(this.#sampleRate, freq, this.#volume);
    const dampen = profile.dampen(this.#sampleRate, freq, this.#volume);
    const wave = profile.wave;

    const totalSamples = Math.round(this.#sampleRate * duration);
    const buffer = this.#ctx.createBuffer(1, totalSamples, this.#sampleRate);
    const channel = buffer.getChannelData(0);

    const mod = this.#modFunctions; // shortcut
    const vars = {};                // local per‑generation storage

    for (let i = 0; i < totalSamples; i++) {
      const t = i / this.#sampleRate;
      const phase = 2 * Math.PI * freq * t;

      // Apply envelope: linear attack, exponential decay
      const env = i < attack * this.#sampleRate
        ? (i / (attack * this.#sampleRate)) // attack
        : Math.pow(1 - ((i - attack * this.#sampleRate) / (duration * this.#sampleRate - attack * this.#sampleRate)), dampen);

      // Base waveform (sin + modulation functions)
      // const base = mod[0](i, this.#sampleRate, freq, 0);
      let sample = 0;
      // Example: the piano implementation uses a mix of modulations
      if (profile.wave.length === 4) { // signature: (i,sr,fr,vol)
        sample = wave.call({ modulate: mod, vars }, i, this.#sampleRate, freq, this.#volume);
      } else {
        // generic fallback (just sine)
        sample = Math.sin(phase);
      }

      channel[i] = env * sample;
    }

    const blob = audioBufferToWavBlob(buffer);
    const url = URL.createObjectURL(blob);
    this.#cache.set(key, url);

    if (this.#debug) console.timeEnd('generate');
    return url;
  }

  play(soundIndex, note, octave, duration) {
    const url = this.generate(soundIndex, note, octave, duration);
    const audio = new Audio(url);
    audio.play();
    return true;
  }

  #clearCache() {
    for (const url of this.#cache.values()) {
      URL.revokeObjectURL(url);
    }
    this.#cache.clear();
  }
}

/* Default mod functions (the same 10 that were in the original code). */
const DEFAULT_MODS = [
  (i, sr, fr, x) => Math.sin(2 * Math.PI * ((i / sr) * fr + x)),
  (i, sr, fr, x) => Math.sin(4 * Math.PI * ((i / sr) * fr + x)),
  (i, sr, fr, x) => Math.sin(8 * Math.PI * ((i / sr) * fr + x)),
  (i, sr, fr, x) => Math.sin(0.5 * Math.PI * ((i / sr) * fr + x)),
  (i, sr, fr, x) => Math.sin(0.25 * Math.PI * ((i / sr) * fr + x)),
  (i, sr, fr, x) => 0.5 * Math.sin(2 * Math.PI * ((i / sr) * fr + x)),
  (i, sr, fr, x) => 0.5 * Math.sin(4 * Math.PI * ((i / sr) * fr + x)),
  (i, sr, fr, x) => 0.5 * Math.sin(8 * Math.PI * ((i / sr) * fr + x)),
  (i, sr, fr, x) => 0.5 * Math.sin(0.5 * Math.PI * ((i / sr) * fr + x)),
  (i, sr, fr, x) => 0.5 * Math.sin(0.25 * Math.PI * ((i / sr) * fr + x)),
];
