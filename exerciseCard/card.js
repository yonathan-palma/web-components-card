class card extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.img = this.getAttribute('image');
  }

  static get observedAttributes() {
    return ['image'];
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'image') {
      this.img = newValue;
    }
    this.render();
  }

  getTemplate() {
    const card = document.createElement('template');
    card.innerHTML = `<article class="card">
      <div class="image">
        <img src="${this.img}" class="img-product" alt="product">
      </div>
      <div class="description-product">
        <h2><slot name="title"></slot></h2>
        <h3><slot name="subTitle"></slot></h3>
        <p><slot name="description"></slot></p>
        <div class="footer-product">
          <h3>$<slot name="price"></slot></h3>
          <button type="button">Comprar</button>
        </div>
      </div>
    </article> ${this.getStyle()}`;

    return card;
  }

  getStyle() {
    return `
      <style>
      :host {
        width: 60%;
        min-width: 320px;
        max-width: 900px;
        box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.24);
        -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.24);
        -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.24);
      }
      article.card{
        display: flex;
        width: 100%;
        gap:1rem;
        
      }
      .card div{
        width: 100%;
      }
      .image{
        background-color: #5a6cb2;
        position: relative;
      }
      .image:before{
        position: absolute;
        top: 20px;
        left: 20px;
        font-size: 6em;
        font-weight: 600;
        color: #000;
        content: 'Nike';
        opacity: 0.1;
      }
      .image img.img-product{
        width: 150%;
        position: absolute;
        transform: rotate(332deg);
        bottom: -40px;
        left: -160px;
      }
      
      .description-product{
        padding: 0 2rem
      }
      .description-product h2{
        font-size: 2.5em;
        color: #444;
        letter-spacing: 2px;
      }
      .description-product h3{
        font-size: 1.2em;
        color: #a2a2a2;
      }
      .description-product p{
        font-size: 1em;
        color: #333;
        margin-left: 2rem;
        margin-bottom: 2rem
      }
      .footer-product{
        display: flex;
        justify-content: space-between;
        margin: 4rem 0;
      }
      .footer-product h3{
        margin: 0;
        font-size: 2em;
      }
      .footer-product button{
        padding: 15px 20px;
        font-size: 16px;
        color: #fff;
        letter-spacing: 1px;
        font-weight: 600;
        border-radius: .8rem;
        background-color: #5a6cb2;
        cursor: pointer;
      }
      @media (max-width: 768px) {
        article.card {
          flex-direction: column;
        }
        .image img.img-product{
          position: relative;
        }
        .image img.img-product {
          left: 0;
          width:100%
        }
        .image:before{
          font-size: 4em;
        }
        .card div {
          width: auto;
        }
      }
      
      </style>
    `;
  }

  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define('card-component', card);
