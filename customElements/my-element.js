const templates = document.createElement('div');
templates.innerHTML = `
  <style>
    .texto {
      color:red
    }
    p {
      color: blue;
    }
  </style>
  <P class="texto">Hola mundo 2</p>
  <P>texto de ejemplo</p>
`;

class myElement extends HTMLElement {
  constructor() {
    super();
    this.p = document.createElement('p');
  }

  connectedCallback() {
    this.p.textContent = 'Hello World';
    this.appendChild(this.p);
    this.appendChild(templates);
  }
}

customElements.define('my-element', myElement);
