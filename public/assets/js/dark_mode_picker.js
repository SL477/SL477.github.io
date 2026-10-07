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
    updateUIModeBtn(mode === 'dark');
  } else {
    updateUIModeBtn(isSystemDarkMode());
  }
}
get_initial_ui_mode();

function updateUIModeBtn(isDark) {
  const btn = document.getElementById('ui-mode-picker');
  btn.classList.toggle('dark', isDark);
  btn.setAttribute('aria-label', isDark ? 'Activate light mode' : 'Activate dark mode');
}

function isSystemDarkMode() {
  const darkModeMql = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
  return darkModeMql && darkModeMql.matches;
}

document.getElementById('ui-mode-picker')?.addEventListener('click', () => {
  const mode = localStorage.getItem('uiMode');
  if (mode) {
    localStorage.removeItem('uiMode');
    const colorScheme = document.querySelector('meta[name="color-scheme"]');
    colorScheme.setAttribute('content', 'light dark');
    updateUIModeBtn(isSystemDarkMode());
  } else {
    const newMode = isSystemDarkMode();
    change_ui_mode(newMode ? 'light' : 'dark');
    updateUIModeBtn(!newMode);
  }
});

// Drop down menus
const dropdowns = document.querySelectorAll('.dropdown_menu');
dropdowns.forEach(menu => {
  // const toggleBtn = menu.closest('.dropdown_title');
  menu.addEventListener('keydown', e => {
    if (e.key === 'Home' || e.key === 'End') {
      e.preventDefault();
      const links = Array.from(menu.querySelectorAll('a'));
      const target = e.key === 'Home' ? links[0] : links[links.length - 1];
      target.focus();
    }
  });
});

const dropdownLinks = document.querySelectorAll('.dropdown_menu a');
for (const dropdownLink of dropdownLinks) {
  dropdownLink.addEventListener('focus', () => {
    dropdownLink.parentNode.parentNode.parentNode.querySelector(
      'button'
    ).ariaExpanded = true;
  });

  dropdownLink.addEventListener('blur', (e) => {
    const hasFocus = dropdownLink.parentNode.parentNode.contains(
      e.relatedTarget
    );
    if (!hasFocus) {
      dropdownLink.parentNode.parentNode.parentNode.querySelector(
        'button'
      ).ariaExpanded = false;
    }
  });
}
