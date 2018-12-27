import React from 'react';
import ApplicationWebViewComponent from "./src/components/WebView";

const url = "http://nano-learning-dev.herokuapp.com";
export default class App extends React.Component {
  render() {
    return (
        <ApplicationWebViewComponent url={url}/>
    );
  }
}
