class DomNodeCollection {
  constructor(elements) {
    this.elements = elements;
  }
  html(string) {
    if (string === undefined) {
      return this.elements[0].innerHTML;
    } else {
      this.elements.forEach( el => {
        el.innerHTML = string;
      });
    }
  }

  empty() {
    this.elements.map(el => {
      el.innerHTML = "";
    });
  }

  append(elements) {

    if (elements.constructor.name === 'DomNodeCollection') {

      elements = elements.elements;
      this.elements.map(innerEl => {
        elements.map( outerEl => {
          innerEl.innerHTML += outerEl.outerHTML;
        });
      });

    } else{
      this.elements.map(innerEl => {
        if (elements.constructor.name === "String") {
          innerEl.innerHTML += elements;
        } else {
          innerEl.appendChild(elements);
        }
      });
    }

    return this.elements;
  }

  attr(string, value) {
    let node = this.elements[0];
    let attribute = node.getAttribute(string);
    if ((attribute === null && value )||(attribute && value)){
      let a = document.createAttribute(string);
      a.value = value;
      node.setAttributeNode(a);
    }
    return node.getAttribute(string);
  }

  addClass(className) {
    this.elements.map( el => {
      el.classList.add(className);
    });
    return this.elements;
  }

  removeClass(className) {
    this.elements.map( el => {
      el.classList.remove(className);
    });
    return this.elements;
  }

  children() {
    let childs = [];
    this.elements.forEach( el => {
      childs.push(new DomNodeCollection(el.children));
    });
    return childs;
  }

  parent() {
    let parent = [];
    this.elements.forEach( el => {
      parent.push(new DomNodeCollection(el.parentElement));
    });
    return parent;
  }
}


module.exports = DomNodeCollection;
