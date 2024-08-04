const MODAL_TITLE = document.getElementById('projectModalTitle');
const MODAL_BODY = document.getElementById('modalBody');

/** Used for opening the various projects
 * @param {string} title
 * @param {string} imgSrc
 * @param {string} imgAlt
 * @param {string} projectText The markdown to use
 */
// eslint-disable-next-line no-unused-vars
function openModal(title, imgSrc, imgAlt, projectText) {
  if (MODAL_TITLE) {
    MODAL_TITLE.textContent = title;
  }
  if (MODAL_BODY) {
    // eslint-disable-next-line no-undef
    MODAL_BODY.innerHTML = `<img src="/assets/images/${imgSrc}.jpg" alt="${imgAlt}"/><pre style="text-wrap: wrap;">${mmd(projectText)}</pre>`;
  }
}
