'use strict';
var instrument: string = '0';
// eslint-disable-next-line no-unused-vars
function instrumentChange() {
  const instrument_radio_button: HTMLInputElement | null =
    document.querySelector(
      'input[name="instrument"]:checked'
    ) as HTMLInputElement;

  if (instrument_radio_button) {
    instrument = instrument_radio_button.value;
    const KEYBOARD_CONTAINER: HTMLElement | null =
      document.getElementById('kbordContainer');
    if (KEYBOARD_CONTAINER) {
      KEYBOARD_CONTAINER.innerHTML = '<div id="keyboard"></div>';

      const INSTRUMENT_FORM: HTMLElement | null =
        document.getElementById('instrument');
      if (INSTRUMENT_FORM) {
        INSTRUMENT_FORM.remove();
      }
      // eslint-disable-next-line no-undef
      playKeyboard(instrument);
    }
  }
}
