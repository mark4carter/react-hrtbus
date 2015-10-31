require('normalize.css');
require('styles/App.css');

import React from 'react';
import StopList from './Stop/StopList';
import AppActions from '../actions/AppActions'
import AppStore from "../stores/AppStore"


class AppComponent extends React.Component {

  handleClick() {
  	AppActions.addItem('this is the item');
  	AppActions.consoleThis();
  	console.log("it has been clicked!");
  }

  render() {
    return (
      <div className="index">
        <h3 onClick={this.handleClick}>Click this Title, then check console</h3>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
