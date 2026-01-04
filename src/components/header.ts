import { html } from '../lib/html.ts';

/** Shared Header */
export default class HeaderComponent extends HTMLElement {
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
      <style>
        header {
          display: grid;
          grid-template-columns: max-content;
          color: var(--text-1);
          line-height: var(--font-lineheight-0);
        }

        header > h2 {
          color: var(--indigo-7);
        }
      </style>
      <header>
        <h1>Sunny Singh</h1>
        <h2>Personal Website</h2>
      </header>
    `;
  }
}

customElements.define('app-header', HeaderComponent);
