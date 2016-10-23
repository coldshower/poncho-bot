import React, { Component } from 'react';
import Header from './Header';
import Chat from './chat/Chat';
import initialState from '../initialState';
import { scrollToBottom } from '../utils';
import { API_KEY } from '../constants';
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
      this.toggleWaiting();
    }, 5000);
  }

  toggleWaiting () {
    const { waiting } = this.state;
    this.setState({
      waiting: !waiting
    });
  }

  updateCurrentInput (e) {
    this.setState({
      currentInput: e.target.value
    });
  }

  submitMessage (author, content) {
    const { history, iterator, currentInput, waiting } = this.state;
    const newMessage = {
      author,
      content
    };

    this.setState({
      history: history.concat([newMessage]),
      currentInput: author === 'You' ? '' : currentInput,
      iterator: iterator + 1
    });
    scrollToBottom();

    if (waiting) {
      this.requestYoutube(author, content);
    }
  }

  requestYoutube (author, content) {
    fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=' + content.split(' ').join('') + '&type=video&key=' + API_KEY)
    .then(res => res.json())
    .then(video => {
      const target = video.items[0];
      this.setState({
        waiting: false
      });
      this.submitMessage('Bot', 'Let me play ' + target.snippet.title + ' for you.')
      this.submitMessage('Bot', <iframe width="50%" height="auto" src={ "https://www.youtube.com/embed/" + target.id.videoId + '?autoplay=1'} ></iframe>);
    })
    .catch(e => {
      this.submitMessage('Bot', "That didn't work. Do you listen to Nickelback or something?");
    });
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