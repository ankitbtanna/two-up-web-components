const template = document.createElement("template");
template.innerHTML = `
<style>
:host([theme="error"]) {
    --button-background-color: red;
    --button-text-color: white;
}

:host([theme="warn"]) {
    --button-background-color: yellow;
    --button-text-color: black;
}

.pink {
    background-color: var(--button-background-color);
    color: var(--button-text-color);
}
</style>
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
