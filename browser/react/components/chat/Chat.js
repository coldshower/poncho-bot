import React from 'react';
import ChatBox from './ChatBox';
import ChatInput from './ChatInput';

export default ({ history, submitMessage, updateCurrentInput, currentInput }) => {
  return (
    <div>
      <ChatBox history={ history } />
      <ChatInput currentInput={ currentInput } submitMessage={ submitMessage } updateCurrentInput={ updateCurrentInput } />
    </div>
  );
}