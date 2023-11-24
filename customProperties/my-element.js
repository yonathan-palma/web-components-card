class myElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  getTemplate() {
    const templates = document.createElement('template');
    templates.innerHTML = `
      <section>
        <h2><slot name="title"></slot></h2>
        <div>
          <p><slot name="parrafo"></slot><p>
        </div>
      </section>
      ${this.getStyles()}
    `;
    return templates;
  }

  getStyles() {
    return `
      <style>
        :host {
          --primary-color: tomato;
          --secondary-color: orange;
          --heading-primary: 30px;
          --heading-secondary: 25px;
          display: inline-block;
          width: 100%;
          min-width: 250px;
          max-width: 450px;
        }
        section {
          background: var(--primary-color);
        }
        section div{
          background: var(--secondary-color);
        }
        h1 {
          font-size: var(--heading-primary);
        }
        p {
          font-size: var(--heading-secondary);
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
