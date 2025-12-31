import '../components/header.ts';

export default class HomePage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <app-header></app-header>
    `;
  }
}
