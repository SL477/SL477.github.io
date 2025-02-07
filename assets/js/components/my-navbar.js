/**
 * This is to enable me to use my NavBar through other sites
 */
class MyNavBar extends HTMLElement {
  /**
   * Called when this is added to the DOM
   */
  async connectedCallback() {
    const resp = await fetch('/assets/js/components/my-navBar.html');
    const html = await resp.text();
    const parser = new DOMParser();
    const navNode = parser.parseFromString(html, 'text/html');
    this.appendChild(navNode.firstChild.childNodes[1].firstChild);
  }
}

customElements.define('my-navbar', MyNavBar);
