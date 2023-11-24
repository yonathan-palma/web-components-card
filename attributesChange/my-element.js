class myElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['title', 'parrafo', 'img'];
  }
  attributeChangedCallback(propName, oldValue, newValue) {
    if (propName === 'title') {
      this[propName] = newValue;
    }
    if (propName === 'parrafo') {
      this[propName] = newValue;
    }
    if (propName === 'img') {
      this[propName] = newValue;
    }
    //Si no requieren hacer algo con con el valor obtenido pueden pasarlo directamente asi
    // if (oldVal !== newVal) {
    //   this[attr] = newVal
    // }
  }

  getTemplate() {
    const templates = document.createElement('template');
    templates.innerHTML = `
      <section>
        <h2>${this.title}</h2>
        <div>
          <p>${this.parrafo}<p>
          <img src="${this.img}" />
        </div>
      </section>
      ${this.getStyles()}
    `;
    return templates;
  }

  getStyles() {
    return `
      <style>
        h2 {
          color: red;
        }
      <style>
    `;
  }
  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }
  connectedCallback() {
    this.render();
  }
}

customElements.define('my-element', myElement);
