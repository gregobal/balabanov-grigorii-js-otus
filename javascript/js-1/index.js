function getPath(node) {
  if (!(node instanceof HTMLElement)) {
    throw new Error('Argument must be a instance of HTMLElement');
  }

  const selectors = [];
  let parentNode = node.parentNode;

  while(parentNode) {
    selectors.unshift(`${node.tagName}:nth-child(${Array.prototype.indexOf.call(parentNode.children, node) + 1})`);

    node = parentNode;
    parentNode = parentNode.parentNode;
  }

  return selectors.join('>').toLowerCase();
}
