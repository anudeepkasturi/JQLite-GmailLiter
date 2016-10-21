const MessageStore = require('./message_store');

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
