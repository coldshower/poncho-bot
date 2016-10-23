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

  updateCurrentInput (e) {
    this.setState({
      currentInput: e.target.value
    });
  }

  submitMessage (author, content) {
    const { history } = this.state;
    const newMessage = {
      author,
      content
    };
    this.setState({
      history: history.concat([newMessage]),
      currentInput: ''
    });
  }

  render () {
    const { intro, history, currentInput } = this.state;
    return (
      <div id="main">
        <Header intro={ intro } />
        <Chat 
          history={ history }
          currentInput={ currentInput }
          submitMessage={ this.submitMessage }
          updateCurrentInput={ this.updateCurrentInput }
        />
      </div>
    );
  }
}