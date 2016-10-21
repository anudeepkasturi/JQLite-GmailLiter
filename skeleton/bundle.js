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

	const Router = __webpack_require__(1);
	const Inbox = __webpack_require__(2);
	const Sent =  __webpack_require__(4);
	document.addEventListener("DOMContentLoaded", () => {
	  let router = new Router(document.querySelector('.content'), routes);
	  router.start();
	  window.location.hash = 'inbox';
	  router.start();

	  document.querySelectorAll(".sidebar-nav li").forEach(el => {
	    el.addEventListener("click", (e) => {
	      e.preventDefault();
	      let element = e.currentTarget;
	      let location = element.innerText.toLowerCase();
	      window.location.hash = location;
	      router = new Router(document.querySelector('.content'), routes);
	      router.start();

	    });
	  });
	});

	let routes = {
	  inbox: Inbox,
	  sent: Sent
	};


/***/ },
/* 1 */
/***/ function(module, exports) {

	class Router {
	  constructor(node, routes) {
	    this.node = node;
	    this.routes = routes;
	  }

	  start() {
	    this.render();
	    this.node.addEventListener('hashchange',() => {
	      this.render();
	    });
	  }

	  activeRoute() {
	    return this.routes[window.location.hash.slice(1)];
	  }

	  render() {
	    this.node.innerHTML = "";
	    let component = this.activeRoute();
	    if (component === undefined) {
	      this.node.innerHTML = "";
	    } else {
	      this.node.innerHTML = "";
	      // debugger;
	      this.node.appendChild(component['render']());
	    }
	    // let displayRoute = document.createElement('p');
	    // displayRoute.innerHTML = component;
	    // this.node.appendChild(displayRoute);

	  }

	}

	module.exports = Router;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	const MessageStore = __webpack_require__(3);

	let inbox = {
	  render: function () {
	    let inBoxContainer = document.createElement('ul');
	    inBoxContainer.classList.add('messages');
	    let messages = MessageStore.getInboxMessages();
	    messages.forEach(message => {
	      inBoxContainer.appendChild(this.renderMessage(message));
	    });
	    return inBoxContainer;
	  },

	  renderMessage: function (message) {
	    let li = document.createElement('li');
	    li.classList.add('message');
	    li.innerHTML = `<span class="from">${message.from}</span>`;
	    li.innerHTML += `<span class="subject">${message.subject} </span>`;
	    li.innerHTML += `<span class="body">${message.body}</span>`;
	    return li;
	  }
	};

	module.exports = inbox;


/***/ },
/* 3 */
/***/ function(module, exports) {

	let messages = {
	  sent: [
	    {to: "friend@mail.com", subject: "Check this out", body: "It's so cool"},
	    {to: "person@mail.com", subject: "zzz", body: "so booring"}
	  ],
	  inbox: [
	    {from: "grandma@mail.com", subject: "Fwd: Fwd: Fwd: Check this out", body:
	"Stay at home mom discovers cure for leg cramps. Doctors hate her"},
	  {from: "person@mail.com", subject: "Questionnaire", body: "Take this free quiz win $1000 dollars"}
	]
	};


	let MessageStore = {
	  getInboxMessages: function () {
	    return messages.inbox;
	  },

	  getSentMessages: function () {
	    return messages.sent;
	  }
	};

	module.exports = MessageStore;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	const MessageStore = __webpack_require__(3);

	let Sent = {
	  render: function() {
	    let outBoxContainer = document.createElement('ul');
	    outBoxContainer.classList.add('messages');
	    let messages = MessageStore.getSentMessages();
	    messages.forEach(message => {
	      outBoxContainer.appendChild(this.renderMesssage(message));
	    });
	    return outBoxContainer;
	  },

	  renderMessage: function (message){
	    let li = document.createElement('li');
	    li.classList.add('message');
	    li.innerHTML = `<span class="from">${message.from}</span>`;
	    li.innerHTML += `<span class="subject">${message.subject}</span>`;
	    li.innerHTML += `<span class="body">${message.body}</span>`;
	    return li;
	  }
	};

	module.exports = Sent;


/***/ }
/******/ ]);