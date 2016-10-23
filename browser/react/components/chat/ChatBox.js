import React from 'react';
import Message from './Message';
import './chatbox.scss';

export default ({ history, iterator }) => {
  return (
    <div id="chatbox">
      <div id="chatlog">
        { 
          history.map(message => {
            const { author, content, iterator } = message;
            return (
              <Message key={ iterator } author={ author } content={ content } />
            );
          })
        }
      </div>
    </div>
  );
}