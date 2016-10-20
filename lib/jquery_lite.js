/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const DomNodeCollection = __webpack_require__(1);


	window.$l = function (selector) {
	  let object;

	  if (selector.constructor.name === "String") {
	    object = Array.from(document.querySelectorAll(selector));
	  } else if (selector instanceof HTMLElement) {
	    object = [selector];
	  }
	  return new DomNodeCollection(object);
	};


/***/ },
/* 1 */
/***/ function(module, exports) {

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


/***/ }
/******/ ]);