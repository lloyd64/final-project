import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class Project3 extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css` 
      .wrapper {
        display: inline-block;
        flex-direction: column;
      }

      .week {
        display: inline-block;
        vertical-align: middle;
      }

      .description {
        display: inline-block;
        vertical-align: middle;
      }
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
      <div class="wrapper">
        <div class="week">
          <h2 id="header">Week 1</h2>
        </div>
        <div class="Description">
          <p>2 hours to complete</p>
          <h2>Misconceptions about happiness</h2>
        </div>
      </div>
    `;
  }
}

customElements.define('project-3', Project3);