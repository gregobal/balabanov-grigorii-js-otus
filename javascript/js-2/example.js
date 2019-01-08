const example = {
  "id": "Node",
  "items": [
    {"id": "Text"},
    {
      "id": "Element",
      "items": [
        {
          "id": "HTMLElement",
          "items": [
            {"id": "HTMLInputElement"},
            {"id": "HTMLBodyElement"},
            {"id": "HTMLAnchorElement"},
            {"id": "...etc"}
          ]
        },
        {"id": "SVGElement"}
      ]
    },
    {"id": "Comment"},
  ]
};

const
  prevElem = document.getElementsByTagName('h2')[1],
  elem = document.createElement('my-tree');

elem.items = example;

document.body.insertBefore(elem, prevElem.nextSibling);
