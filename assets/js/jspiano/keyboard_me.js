'use strict';
var instrument = '0';
// eslint-disable-next-line no-unused-vars
function instrumentChange() {
  var instrument_radio_button = document.querySelector(
    'input[name="instrument"]:checked'
  );
  if (instrument_radio_button) {
    instrument = instrument_radio_button.value;
    var KEYBOARD_CONTAINER = document.getElementById('kbordContainer');
    if (KEYBOARD_CONTAINER) {
      KEYBOARD_CONTAINER.innerHTML = '<div id="keyboard"></div>';
      var INSTRUMENT_FORM = document.getElementById('instrument');
      if (INSTRUMENT_FORM) {
        INSTRUMENT_FORM.remove();
      }
      // eslint-disable-next-line no-undef
      playKeyboard(instrument);
    }
  }
}
