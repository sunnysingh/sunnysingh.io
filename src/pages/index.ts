import { html } from '../lib/html.ts';

export const getFrontmatter = () => ({
  title: 'Sunny Singh',
});

export default class HomePage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = html`<p>Home Page</p>`;
  }
}
