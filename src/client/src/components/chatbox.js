import React, { Component } from 'react';
import * as Blueprint from '@blueprintjs/core';
import { addChatMessage } from '../actions';

export default class ChatBox extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.addMessage = this.addMessage.bind(this);
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  addMessage() {
    addChatMessage(this.state.value, this.props.user, this.props.currentSub);
    this.textInput.value = ''; //FIXME
  }
  render() {
    if (this.props.currentSub) {
      return (
        <div className="chat-box">
          <input
            ref={el => (this.textInput = el)}
            className="pt-input pt-round"
            value={this.state.value}
            onChange={this.handleChange}
            type="text"
            placeholder="Chat..."
          />
          <button
            type="button"
            className="pt-button pt-icon-arrow-up"
            onClick={this.addMessage}
          />
          {this.props.user ? (
            <h6>
              Posting as{' '}
              <span className="pt-tag pt-round">
                {this.props.user.displayName}
              </span>
            </h6>
          ) : (
            <div />
          )}
        </div>
      );
    }
    return <div />;
  }
}
