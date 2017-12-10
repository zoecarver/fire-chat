import React, { Component } from 'react';
import { addSub } from '../actions';
import { Menu, MenuItem, MenuDivider } from '@blueprintjs/core';

export default class MenuClass extends Component {
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
    if (this.state.value !== '') addSub(this.state.value);
    this.textInput.value = ''; //FIXME
  }
  componentWillMount() {
    this.props.listenForSubs(this.props.subs);
  }
  render() {
    return (
      <Menu className="menu">
        <MenuItem iconName="add" onClick={this.addMessage} text="Add Sub" />
        <input
          ref={el => (this.textInput = el)}
          className="pt-input pt-round"
          value={this.state.value}
          onChange={this.handleChange}
          type="text"
          placeholder="Name of sub"
        />
        <MenuDivider />
        {this.props.subs.map(sub => (
          <MenuItem
            iconName="symbol-circle"
            onClick={() => this.props.setCurrentSub(sub.text)}
            text={sub.text}
          />
        ))}
      </Menu>
    );
  }
}
