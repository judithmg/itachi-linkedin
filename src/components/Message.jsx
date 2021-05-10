import React from 'react';

const Message = ({ message }) => (
  <div className="message__container">
    <img src={`./images/${message.name.split(/(\s+)/)[0].toLowerCase()}.png`} className="message__img" alt="message " />
    <div>
      <p className="message__date">{message.date}</p>
      <p className="message__name">{message.name}</p>
      <p className="message__message">{message.message}</p>
    </div>
  </div>
);

export default Message;
