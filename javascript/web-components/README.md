# Custom Elements Tree* Lit-Element

С помощью Lit-Element (можно также на выбор Lit-HTML, Polymer) создать приложение для показа дерева с помощью 
компонентов my-tree и my-leaf. Компоненты должны получать данные о структуре поддерева от родительского элемента. 

Пример структуры

```json
{
  "id": 1,
  "items": [{
    "id": 2,
    "items": [{ "id": 3 }]
  }]
}
```

### Start a dev server

```
npm install -g polymer-cli
npm install
npm start
```
