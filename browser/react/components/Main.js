import React, { Component } from 'react';
import Header from './Header';
import Chat from './chat/Chat';
import initialState from '../initialState';
import './Main.scss';

export default class Main extends Component {
  constructor (props) {
    super(props); 
    this.state = initialState;
    this.updateCurrentInput = this.updateCurrentInput.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }

  componentDidMount () {    
    window.addEventListener('keypress', e => {
      if (e.which === 13) {
        this.submitMessage('You', this.state.currentInput);
      }
    });

    setTimeout(() => {
      this.submitMessage('Bot', 'Hi there!');
    }, 3000);
    setTimeout(() => {
      this.submitMessage('Bot', 'Name an artist you like.');
    }, 5000);
  }

  updateCurrentInput (e) {
    this.setState({
      currentInput: e.target.value
    });
  }

  submitMessage (author, content) {
    const { history, iterator, currentInput } = this.state;
    const newMessage = {
      author,
      content
    };
    this.setState({
      history: history.concat([newMessage]),
      currentInput: author === 'You' ? '' : currentInput,
      iterator: iterator + 1
    });
    this.scrollToBottom();
  }

  scrollToBottom () {
    const chatBox = document.getElementById('chatbox');
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  render () {
    const { intro, history, currentInput, iterator } = this.state;
    return (
      <div id="main">
        <Header intro={ intro } />
        <Chat 
          history={ history }
          currentInput={ currentInput }
          submitMessage={ this.submitMessage }
          updateCurrentInput={ this.updateCurrentInput }
          iterator={ iterator }
        />
      </div>
    );
  }
}