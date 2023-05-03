import { LitElement, html, css } from 'lit';
import "./indiv-week.js";

export class Project3 extends LitElement {
  static get tag(){
    return 'project-3';
  }
  static get properties(){
    return{
    things: {type: String },
    week: {type: String },
    title: {type: String },
    description: {type: String}
    }
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
    this.things = [];
    this.updateWeek();
  }
  updateWeek() {
    const address = new URL('../assets/things.json', import.meta.url).href;
    const data = fetch(address).then((response) => {
        if (response.ok) {
            return response.json()
        }
        return [];
    })
    .then((data) => {
        this.things = data;
    });
    console.log(data);
}
static get styles(){
return css`
:host{
  display: block;
} 
`;

}

  render() {
    return html`
    <div class="wrapper">
            ${this.things.map(thing => html`
                <div class="item">
                    <indiv-week week="${thing.week}" time="${thing.time}" title="${thing.title}" description="${thing.description}"></indiv-week>
                </div>
            `)}
        </div> 
    `;
  }
}

customElements.define(Project3.tag, Project3);