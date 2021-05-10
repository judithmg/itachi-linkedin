import React from 'react';
import messages from '../data/message';
import Message from './Message';
import '../styles/Inbox.scss';

const Inbox = () => (
  <section className="inbox__container">
    <div className="inbox__search">
      <input placeholder="Search messages" />
      <span>&#xf002;</span>
      <button type="button">&#xf044;</button>
    </div>
    {messages.map((message) => <Message message={message} />)}
  </section>
);

export default Inbox;
