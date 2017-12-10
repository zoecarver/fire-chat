import React, { Component } from 'react';
import * as Blueprint from '@blueprintjs/core';

export default class Msg extends Component {
  render() {
    return (
      <div class="pt-card pt-elevation-0 pt-interactive">
        <span className="pt-tag pt-round">{this.props.sender.displayName}</span>
        <p>{this.props.text}</p>
      </div>
    );
  }
}
