import React from 'react';
import Message from './Message';
import './chatbox.scss';

export default ({ history }) => {
  return (
    <div id="chatbox">
      <div id="chatlog">
        { 
          history.map(message => {
            const { author, content } = message;
            return (
              <Message author={ author } content={ content } />
            );
          })
        }
      </div>
    </div>
  );
}