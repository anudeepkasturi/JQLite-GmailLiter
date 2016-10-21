const Router = require('./router');
const Inbox = require('./inbox');
const Sent =  require('./sent');
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
