'use strict';

class MyCustomElement extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({mode: 'open'});
  }

  get items() {
    return JSON.parse(this.getAttribute('items'));
  }

  set items(value) {
    this.setAttribute('items', JSON.stringify(value));
  }
}

customElements.define('my-tree', class extends MyCustomElement {
  connectedCallback() {
    const
      shadow = this.shadowRoot,
      myTreeElement = document.createElement('div'),
      items = this.items.items;


    shadow.innerHTML = '<style> div {margin-left: 20px} div::before {content: "📁 "} </style>';
    myTreeElement.textContent = this.items.id;

    if (items) {
      items.forEach(item => {
        const childElement = document.createElement(item.items ? 'my-tree' : 'my-leaf');

        childElement.items = item;
        myTreeElement.appendChild(childElement);
      });
    }

    shadow.appendChild(myTreeElement);
  }
});

customElements.define('my-leaf', class extends MyCustomElement {
  connectedCallback() {
    const
      shadow = this.shadowRoot,
      meLeafElement = document.createElement('div');

    shadow.innerHTML += '<style> div {margin-left: 25px} div::before {content: "🗎 "} </style>';
    meLeafElement.textContent = this.items.id;
    shadow.appendChild(meLeafElement);
  }
});
