const template = document.createElement("template");
template.innerHTML = `
<slot></slot>
<label>Shadow DOM Text</label>
<button class="pink">Shadow DOM Button</button>
`;

class ExampleElement extends HTMLElement {
  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });

    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("example-element", ExampleElement);
