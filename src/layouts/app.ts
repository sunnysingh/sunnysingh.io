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
          <link rel="stylesheet" href="/node_modules/open-props/open-props.min.css"></link>
        </head>

        <body>
          <app-header></app-header>
          <main>
            <content-outlet></content-outlet>
          </main>
          <app-footer></app-footer>
        </body>
      </html>
    `;
  }
}
