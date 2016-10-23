import React, { Component } from 'react';
import './message.scss';

export default class Message extends Component {
  constructor (props) {
    super(props);
  }

  authorStyler (author) {
    return author === 'You' ? 'you' : 'bot';
  }

  render () {
    const { author, content } = this.props;
    const authorStyle = this.authorStyler(author);
    return (
      <div>
        <p className={ 'sent-from-' + authorStyle }>
          <span className={ 'author-' + authorStyle }>{ author }: </span>
          <span className="message-content">{ content }</span>
        </p>
      </div>
    );
  }
}