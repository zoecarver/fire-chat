import React, { Component } from 'react';
import { signIn } from '../actions';

export default class LogIn extends Component {
  render() {
    return (
      <button
        type="button"
        className="pt-button pt-icon-user"
        onClick={
          this.props.user
            ? () => this.props.setUser(void 0)
            : () => signIn.then(user => this.props.setUser(user))
        }
      >
        {this.props.user ? 'logout' : 'login'}
      </button>
    );
  }
}
