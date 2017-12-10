import React, { Component } from 'react';
import ChatBox from './components/chatbox';
import Messages from './components/messages';
import LogIn from './components/auth';
import Menu from './components/menu';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="app">
        <Menu
          subs={this.props.subs}
          listenForSubs={this.props.listenForSubs}
          setCurrentSub={this.props.setCurrentSub}
          messages={this.props.messages}
        />
        <div className="main">
          <h1 className="subName">
            {this.props.currentSub
              ? this.props.currentSub
              : 'Pick a sub from the left'}
          </h1>
          <Messages
            currentSub={this.props.currentSub}
            messages={this.props.messages}
            listenForMessages={this.props.listenForMessages}
          />
          <ChatBox
            currentSub={this.props.currentSub}
            user={this.props.user}
            addChatMessage={this.props.addChatMessage}
            messages={this.props.messages}
          />
        </div>
        <LogIn setUser={this.props.setUser} user={this.props.user} />
      </div>
    );
  }
}
