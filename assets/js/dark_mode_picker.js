/**
 * This is to toggle the UI between light and dark mode
 * @param {string} e the mode to start in
 */
function change_ui_mode(e) {
  const colorScheme = document.querySelector('meta[name="color-scheme"]');
  colorScheme.setAttribute('content', e);
  localStorage.setItem('uiMode', e);
}

/**
 * Get the initial mode to start in (auto, light or dark)
 */
function get_initial_ui_mode() {
  const mode = localStorage.getItem('uiMode');
  if (mode) {
    change_ui_mode(mode);
  }
}
get_initial_ui_mode();
