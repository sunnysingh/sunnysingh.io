import { html } from '../lib/html.ts';

/** Shared Footer */
export default class FooterComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot!.innerHTML = html` <footer>Copyright 2026</footer> `;
  }
}

customElements.define('app-footer', FooterComponent);
