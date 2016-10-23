import React, { Component } from 'react';

export default class Message extends Component {
  constructor (props) {
    super(props);
  }

  authorStyler (author) {
    return author === 'You' ? 'you' : 'bot';
  }

  render () {
    const { author, content } = this.props;
    return (
      <div>
        <p>
          <span className={ 'author-' + this.authorStyler({ author }) }>{ author }: </span>
          <span className="message-content">{ content }</span>
        </p>
      </div>
    );
  }
}