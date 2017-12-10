import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './src/reducers';
import Src from './src/containers';
import "@blueprintjs/core/dist/blueprint.css";
import "./src/styles/index.css";
import logger from 'redux-logger'
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(logger, thunk))

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Src />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
