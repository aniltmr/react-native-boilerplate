import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "../utils/redux/store";
import App from "./App";

// TODO integrate redux persist for offline support
export default class Index extends Component {
  componentDidMount() {
    this.debugging();
  }

  debugging = () => {
    XMLHttpRequest = GLOBAL.originalXMLHttpRequest
      ? GLOBAL.originalXMLHttpRequest
      : GLOBAL.XMLHttpRequest;

    // fetch logger
    global._fetch = fetch;
    global.fetch = function (uri, options, ...args) {
      return global._fetch(uri, options, ...args).then((response) => {
        return response;
      });
    };
  };

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
