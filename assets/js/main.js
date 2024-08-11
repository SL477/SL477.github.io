const MODAL_TITLE = document.getElementById('projectModalTitle');
const MODAL_BODY = document.getElementById('modalBody');

/** Used for opening the various projects
 * @param {string} title
 * @param {string} imgSrc
 * @param {string} imgAlt
 * @param {string} projectText The markdown to use
 * @param {string} [linkHttp=''] 
 * @param {string} [linkAlt=''] 
 */
// eslint-disable-next-line no-unused-vars
function openModal(title, imgSrc, imgAlt, projectText, linkHttp = '', linkAlt = '') {
  if (MODAL_TITLE) {
    MODAL_TITLE.textContent = title;
  }
  if (MODAL_BODY) {
    // eslint-disable-next-line no-undef
    const linkHtml = `<a href="${linkHttp}" target="_blank" rel="noopener noreferrer">${linkAlt}</a>`;
    MODAL_BODY.innerHTML = `<img src="/assets/images/${imgSrc}.jpg" alt="${imgAlt}"/><pre style="text-wrap: wrap;">${projectText.replace("@link@", linkHtml)}</pre>`;
  }
}
