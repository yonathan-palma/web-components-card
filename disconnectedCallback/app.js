class myCustomElement extends HTMLElement {
  constructor() {
    super();
    console.log('constructor');
  }
  connectedCallback() {
    console.log('hola desde el dom');
  }
  disconnectedCallback() {
    console.log('adios del dom');
  }
}

customElements.define('my-custom-element', myCustomElement);
document.querySelector('my-custom-element').remove();
