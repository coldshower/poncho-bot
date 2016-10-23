import React from 'react';
import ChatBox from './ChatBox';
import ChatInput from './ChatInput';

export default ({ history, submitMessage, updateCurrentInput, currentInput, iterator }) => {
  return (
    <div>
      <ChatBox history={ history } iterator={ iterator } />
      <ChatInput currentInput={ currentInput } submitMessage={ submitMessage } updateCurrentInput={ updateCurrentInput } />
    </div>
  );
}