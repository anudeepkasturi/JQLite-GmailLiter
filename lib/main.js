const DomNodeCollection = require("./dom_node_collection");


window.$l = function (selector) {
  let object;

  if (selector.constructor.name === "String") {
    object = Array.from(document.querySelectorAll(selector));
  } else if (selector instanceof HTMLElement) {
    object = [selector];
  }
  return new DomNodeCollection(object);
};
