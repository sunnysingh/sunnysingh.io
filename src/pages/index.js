import "../components/header.js";

export default class HomePage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <app-header></app-header>
    `;
  }
}
