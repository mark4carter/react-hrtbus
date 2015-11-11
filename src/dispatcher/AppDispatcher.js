//var Dispatcher = require('flux').Dispatcher;
//var assign = require('object-assign');
import {Dispatcher} from 'flux';
import assign from 'object-assign';

var AppDispatcher = assign(new Dispatcher(), {
  handleNewAction(action) {
  	this.dispatch({
  		source: "NEW_ACTION",
  		action: action
  	});
  }
});

module.exports = AppDispatcher;