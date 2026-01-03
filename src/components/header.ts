export default class HeaderComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */ `
      <style>
        header {
          color: #bada55;
        }
      </style>
      <header>
        <h1>Sunny Singh</h1>
      </header>
    `;
  }
}

customElements.define('app-header', HeaderComponent);
