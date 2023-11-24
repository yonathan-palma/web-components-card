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
          display: inline-block;
          width: 100%;
          min-width: 250px;
          max-width: 450px;
          font-size: 13px;
          background: #1e1e1e;
        }
        :host(.blue){
          background: blue;
        }
        :host([yellow]){
          background: yellow;
        }
        :host-context(article.card){
          max-width: 100%;
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
