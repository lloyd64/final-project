import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class Project3 extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css` 
      .wrapper {
        display: flex;
        flex-direction: row;
        gap: 10rem;
        padding: 20px;
      }

      .week {
        text-align: center;
      }

      .time {
        font-family: "OpenSans-Light", Arial, sans-serif;
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
          <p>WEEK</p>
          <p>1</p>
        </div>
        <div class="Description">
          <p class="time">2 hours to complete</p>
          <p>Misconceptions about happiness</p>
          <p>In this module, you will learn what it means to be happy and why pursuing happiness is not a pointless endeavor. Dr. Santos addresses how our minds lie to us and how the science shows that our misconceptions about money, grades, and social media are holding us back from implementing the techniques studied in positive psychology.</p>
        </div>
      </div>
    `;
  }
}

customElements.define('project-3', Project3);