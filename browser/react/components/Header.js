import React from 'react';
import './header.scss';

export default ({ intro }) => {
  return (
    <div id="header">
      <h1>{ intro }</h1>
    </div>
  );
}