import { LitElement, html } from 'lit-element';

export class MyTreeLitElement extends LitElement {
  static get properties() {
    return {
      items: { type: String }
    };
  }

  render() {
    let tree = {};
    try {
      tree = JSON.parse(this.items);
    } catch (e) {
      console.error(e);
    }

    return ('id' || 'items') in tree && html`
      <style>
        div { margin-left: 20px } 
        .tree::before { content: "📁 " }        
        .leaf::before { content: "🗎 " }          
      </style>
      <div class=${'items' in tree ? 'tree' : 'leaf'}>
        ${Object.keys(tree).map(key => {        
            if (key === 'id') {
              return html`${tree.id}`
            }
            if (key === 'items') {
              return tree.items.map(item => 
                html`<my-tree-lit-element items="${JSON.stringify(item)}"></my-tree-lit-element>`
              )
            }
          }
        )}
      </div>   
    `;
  }
}

// Register the element with the browser
customElements.define('my-tree-lit-element', MyTreeLitElement);
