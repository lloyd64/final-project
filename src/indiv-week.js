import { LitElement, html, css } from 'lit';






class Project3 extends LitElement {
  static properties = {
    header: { type: String },
    week: {type: String,
        reflect: true },
    time: {type: String,
    reflect: true },
    title: {type: String,
    reflect: true },
    description: {type: String,
    reflect: true }

  }

  static styles = css` 
      .wrapper {
        display: flex;
        flex-direction: row;
        gap: 10rem;
        padding: 20px;
      }

      .container {
        text-align: center;
      }

      .time {
        font-family: "OpenSans-Light", Arial, sans-serif;
      }
  `;

  constructor() {
    super();
    this.week = "1";
    this.time = "2 hours to complete";
    this.title = "Introduction";
    this.description = "Why take this course?"
  }

  render() {
    return html`
    <div class="wrapper">
      <div class="container">
        <p>WEEK</p>
        <p>${this.week}</p>
      </div>
      <div class="plan">
        <p>${this.time}</p>
        <p>${this.title}</p>
        <p>${this.description}</p>
      </div>
    
      </div>
    `;
  }
}

customElements.define('project-3', Project3);