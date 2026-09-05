export class Keyboard {
  static PRESS_COLOR = '#1BC0EA'; //color when key is pressed
  static OCTAVE = 4;
  static NOTE_NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B',];

  //  keyCode → {note, octaveShift}
  static KEY_MAP = new Map([
    [192, { note: 'C', octave: -2 }], [49, { note: 'C#', octave: -2 }], [50, { note: 'D', octave: -2 }],
    [51, { note: 'D#', octave: -2 }], [52, { note: 'E', octave: -2 }], [53, { note: 'F', octave: -2 }],
    [54, { note: 'F#', octave: -2 }], [55, { note: 'G', octave: -2 }], [56, { note: 'G#', octave: -2 }],
    [57, { note: 'A', octave: -2 }], [48, { note: 'A#', octave: -2 }], [189, { note: 'B', octave: -2 }],
    [187, { note: 'C', octave: -1 }], [81, { note: 'C#', octave: -1 }], [87, { note: 'D', octave: -1 }],
    [69, { note: 'D#', octave: -1 }], [82, { note: 'E', octave: -1 }], [84, { note: 'F', octave: -1 }],
    [89, { note: 'F#', octave: -1 }], [85, { note: 'G', octave: -1 }], [73, { note: 'G#', octave: -1 }],
    [79, { note: 'A', octave: -1 }], [80, { note: 'A#', octave: -1 }], [219, { note: 'B', octave: -1 }],
    [221, { note: 'C', octave: 0 }], [65, { note: 'C#', octave: 0 }], [83, { note: 'D', octave: 0 }],
    [68, { note: 'D#', octave: 0 }], [70, { note: 'E', octave: 0 }], [71, { note: 'F', octave: 0 }],
    [72, { note: 'F#', octave: 0 }], [74, { note: 'G', octave: 0 }], [75, { note: 'G#', octave: 0 }],
    [76, { note: 'A', octave: 0 }], [186, { note: 'A#', octave: 0 }], [222, { note: 'B', octave: 0 }],
    [90, { note: 'C', octave: 1 }], [88, { note: 'C#', octave: 1 }], [67, { note: 'D', octave: 1 }],
    [86, { note: 'D#', octave: 1 }], [66, { note: 'E', octave: 1 }], [78, { note: 'F', octave: 1 }],
    [77, { note: 'F#', octave: 1 }], [188, { note: 'G', octave: 1 }], [190, { note: 'G#', octave: 1 }],
    [191, { note: 'A', octave: 1 }], [37, { note: 'A#', octave: 1 }], [39, { note: 'B', octave: 1 }],
  ]);

  static KEYCODE_MAP = {
    // Numbers (top row)
    48: '0', 49: '1', 50: '2', 51: '3', 52: '4',
    53: '5', 54: '6', 55: '7', 56: '8', 57: '9',

    // Letters (a–z)
    65: 'A', 66: 'B', 67: 'C', 68: 'D', 69: 'E',
    70: 'F', 71: 'G', 72: 'H', 73: 'I', 74: 'J',
    75: 'K', 76: 'L', 77: 'M', 78: 'N', 79: 'O',
    80: 'P', 81: 'Q', 82: 'R', 83: 'S', 84: 'T',
    85: 'U', 86: 'V', 87: 'W', 88: 'X', 89: 'Y',
    90: 'Z',

    // Function keys
    112: 'F1', 113: 'F2', 114: 'F3', 115: 'F4',
    116: 'F5', 117: 'F6', 118: 'F7', 119: 'F8',
    120: 'F9', 121: 'F10', 122: 'F11', 123: 'F12',

    // Special keys
    13: 'Enter', 16: 'Shift', 17: 'Control',
    18: 'Alt', 20: 'CapsLock', 27: 'Escape',
    32: 'Space', 33: 'PageUp', 34: 'PageDown',
    35: 'End', 36: 'Home', 37: 'ArrowLeft',
    38: 'ArrowUp', 39: 'ArrowRight', 40: 'ArrowDown',
    46: 'Delete', 45: 'Insert', 91: 'Meta',
    144: 'NumLock', 145: 'ScrollLock',

    // Punctuation (US layout)
    186: ';', 187: '=', 188: ',', 189: '-', 190: '.',
    191: '/', 192: '`', 219: '[', 220: '\\', 221: ']',
    222: '\''
  };

  constructor(containerId, instrument = '0') {
    this.container = document.getElementById(containerId);
    if (!this.container) throw new Error('Missing keyboard container');

    this.instrument = instrument;
    this.synth = new AudioSynth();
    this.synth.setVolume(0.5);
    this.pressed = new Set();
    this.keyElements = new Map();

    this._buildUI();
    this._attachListeners();
  }

  _buildUI() {
    // build the keys
    const whiteNotes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    let xWhite = 0;
    for (let octave = -2; octave <= 1; octave++) {
      for (let i = 0; i < Keyboard.NOTE_NAMES.length; i++) {
        const note = Keyboard.NOTE_NAMES[i];
        const isSharp = note.includes('#');

        // Skip black keys that don't exist in the target octave
        if (isSharp && !whiteNotes.includes(note.replace('#', ''))) continue;


        const keyCode = [...Keyboard.KEY_MAP.entries()].find(([, v]) => v.note === note && v.octave === octave)?.[0];
        const key = this._makeKey(note, octave, isSharp, xWhite, keyCode);
        this.container.appendChild(key);
        if (keyCode) this.keyElements.set(keyCode, key);
        if (!isSharp) xWhite++;
      }
    }
    this.container.style.width = `${xWhite * 40}px`;
  }

  _makeKey(note, octave, isSharp, xWhite, keyCode) {
    const key = document.createElement('div');
    key.className = isSharp ? 'key black' : 'key white';
    key.dataset.note = note;
    key.dataset.octave = octave;
    key.dataset.keycode = keyCode;

    // position
    if (isSharp) {
      key.style.left = `${40 * (xWhite - 1) + 25}px`;
      key.style.width = '30px';
      key.style.height = '120px';
    } else {
      key.style.left = `${40 * xWhite}px`;
      key.style.width = '40px';
      key.style.height = '200px';
      xWhite++;
    }

    const label = document.createElement('div');
    label.className = 'label';
    // label.textContent = note;
    label.innerHTML = `<b class="key-label">${Keyboard.KEYCODE_MAP[keyCode]}</b><br/><br/>${note}`;
    // const b = document.createElement('b');
    // b.className = 'key-label';
    // b.textContent = Keyboard.KEYCODE_MAP[keyCode];
    // label.appendChild(b);
    key.appendChild(label);
    return key;
  }

  _attachListeners() {
    const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(navigator.userAgent);
    const startEvt = isMobile ? 'touchstart' : 'mousedown';
    const endEvt = isMobile ? 'touchend' : 'mouseup';

    // 1) mouse / touch on the keys
    this.container.addEventListener(startEvt, ev => this._handlePress(ev));
    this.container.addEventListener(endEvt, ev => this._handleRelease(ev));

    // 2) keyboard events
    window.addEventListener('keydown', ev => this._handleKeyDown(ev));
    window.addEventListener('keyup', ev => this._handleKeyUp(ev));
  }

  _handlePress(e) {
    // get the key that was pressed
    const keyEl = e.target.closest('.key');
    if (!keyEl) return;

    const note = keyEl.dataset.note;
    // const octave = parseInt(keyEl.dataset.octave, 10);
    const keyCode = parseInt(keyEl.dataset.keycode, 10);

    const map = Keyboard.KEY_MAP.get(keyCode);

    // visual feedback
    keyEl.classList.add('playing');
    keyEl.style.backgroundColor = Keyboard.PRESS_COLOR;

    // play the note
    this._playNote(note, Keyboard.OCTAVE + map.octave);
  }

  _handleRelease(e) {
    const keyEl = e.target.closest('.key');
    if (!keyEl) return;

    keyEl.classList.remove('playing');
    keyEl.style.backgroundColor = '';
  }

  _handleKeyDown(ev) {
    if (this.pressed.has(ev.keyCode)) return;      // already held
    this.pressed.add(ev.keyCode);

    const map = Keyboard.KEY_MAP.get(ev.keyCode);
    if (!map) return;

    const keyEl = this.keyElements.get(ev.keyCode);
    if (keyEl) keyEl.classList.add('playing');

    this._playNote(map.note, Keyboard.OCTAVE + map.octave);
  }

  _handleKeyUp(ev) {
    this.pressed.delete(ev.keyCode);

    const keyEl = this.keyElements.get(ev.keyCode);
    if (keyEl) keyEl.classList.remove('playing');
  }

  _playNote(note, octave) {
    console.log('octave', octave, 'note', note);
    const src = this.synth.generate(this.instrument, note, octave, 2);
    const audio = new Audio(src);
    audio.addEventListener('loadeddata', () => audio.play());
    audio.load();      // triggers load & play when ready
  }
}
