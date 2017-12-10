import React, { Component } from 'react';
import Msg from './message';

export default class Messages extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.messages.map(message => (
          <div className="messageBox">
            <Msg
              text={message.text}
              sender={message.name}
              className="messageBox"
            />
            <br />
          </div>
        ))}
      </div>
    );
  }
}
