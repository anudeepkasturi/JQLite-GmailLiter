const MessageStore = require('./message_store');

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
