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

// Drop down menus
const dropdowns = document.querySelectorAll('.dropdown_menu a');
for (const dropdownLink of dropdowns) {
  dropdownLink.addEventListener('focus', (e) => {
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

  dropdownLink.addEventListener('keydown', (e) => {
    // console.log(e, 'button');
    if (e.key === 'Escape') {
      const btn =
        dropdownLink.parentNode.parentNode.parentNode.querySelector('button');
      btn.click();
      btn.focus();
    } else if (e.key === 'Home') {
      e.preventDefault();
      const firstLink = dropdownLink.parentNode.parentNode.querySelector('a');
      firstLink.focus();
    } else if (e.key === 'End') {
      e.preventDefault();
      const links = dropdownLink.parentNode.parentNode.querySelectorAll('a');
      links[links.length - 1].focus();
    }
  });
}

const dropDownButtons = document.querySelectorAll('.dropdown_title');
for (const dropDownButton of dropDownButtons) {
  dropDownButton.addEventListener('click', (e) => {
    const dropDownMenu = document.getElementById(
      dropDownButton.getAttribute('aria-controls')
    );
    if (dropDownButton.ariaExpanded === 'true') {
      dropDownButton.ariaExpanded = false;
      if (dropDownMenu) {
        dropDownMenu.classList.remove('dropdown_expand');
        dropDownMenu.style.visibility = 'hidden';
        dropDownMenu.style.height = 0;
      }
    } else {
      dropDownButton.ariaExpanded = true;
      if (dropDownMenu) {
        dropDownMenu.classList.add('dropdown_expand');
        dropDownMenu.style.visibility = 'visible';
        dropDownMenu.style.height = 'fit-content';
      }
    }
  });

  dropDownButton.addEventListener('blur', (e) => {
    const dropDownMenu = document.getElementById(
      dropDownButton.getAttribute('aria-controls')
    );
    dropDownMenu.style.visibility = '';
    dropDownMenu.style.height = '';
    // console.log('blur');
  });
}
