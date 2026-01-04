import { html } from '../lib/html.ts';

/** Shared Footer */
export default class FooterComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot!.innerHTML = html`
      <link
        rel="stylesheet"
        href="/node_modules/open-props/open-props.shadow.min.css"
      />
      <link
        rel="stylesheet"
        href="/node_modules/open-props/normalize.shadow.min.css"
      />
      <footer>Copyright 2026</footer>
    `;
  }
}

customElements.define('app-footer', FooterComponent);
