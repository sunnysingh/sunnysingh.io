import { html } from '../lib/html.ts';
import '../components/header.ts';
import '../components/footer.ts';

export default class AppLayout extends HTMLElement {
  connectedCallback() {
    this.innerHTML = html`
      <!doctype html>
      <html lang="en">
        <head>
          <title>Sunny Singh</title>
        </head>

        <body>
          <app-header></app-header>
          <main>
            <output for="page"></output>
          </main>
          <app-footer></app-footer>
        </body>
      </html>
    `;
  }
}
