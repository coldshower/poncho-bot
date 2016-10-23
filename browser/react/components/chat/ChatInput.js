import React from 'react';
import './chatinput.scss';

export default ({ submitMessage, currentInput, updateCurrentInput }) => {
  return (
    <div id="chat-input">
      <input name="chat-message" type="text" value={ currentInput } onChange={ updateCurrentInput } />
      <button onClick={ () => submitMessage('You', currentInput) }>Enter</button>
    </div>
  );
}