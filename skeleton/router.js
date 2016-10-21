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
