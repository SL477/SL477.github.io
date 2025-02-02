function change_ui_mode(e) {
  const colorScheme = document.querySelector('meta[name="color-scheme"]');
  colorScheme.setAttribute('content', e);
}
