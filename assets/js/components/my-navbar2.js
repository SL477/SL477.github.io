---
---

/**
 * This is to enable me to use my NavBar through other sites
 */
class MyNavBar extends HTMLElement {
  /**
   * Called when this is added to the DOM
   */
  async connectedCallback() {
    this.innerHTML = `{%- include my-navBar.html -%}`;
  }
}

customElements.define('my-navbar', MyNavBar);
