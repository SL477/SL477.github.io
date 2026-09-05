'use strict';
import { Keyboard } from '/assets/js/jspiano/playKeyboard.js';

const instrumentFieldset = document.getElementById('instrument');

function instrumentChange() {
  const selected = instrumentFieldset.querySelector('input[name="instrument"]:checked');
  if (selected) {
    const instrument = selected.value;

    if (instrumentFieldset) {
      instrumentFieldset.classList.toggle('hidden');
    }
    new Keyboard('keyboard', instrument);
  }
}

instrumentFieldset.addEventListener('change', instrumentChange);