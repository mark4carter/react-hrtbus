require('normalize.css');
require('styles/App.css');

import React from 'react';
import StopList from './Stop/StopList';
import AppActions from '../actions/AppActions'
import AppStore from "../stores/AppStore"


class AppComponent extends React.Component {

  handleClick() {
  	AppActions.addItem('this is the item');
  }

  handleClick2() {
    AppActions.addItem2('this is the item');    
  }

  handleClick3() {
    AppActions.addItem3('this is the item');    
  }

  render() {
    return (
      <div className="index">
        No initial data, click button to pulldata <br />
        <button onClick={this.handleClick}>[Downtown-----------]</button>
        <button onClick={this.handleClick2}>[Greenway ----------]</button>
        <button onClick={this.handleClick3}>[Newport University ----------]</button>
        <StopList />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
