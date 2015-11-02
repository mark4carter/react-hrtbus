var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

var AppDispatcher = assign(new Dispatcher(), {
  handleViewAction: function(action) {
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    });
  },

  handleNewAction: function(action) {
  	this.dispatch({
  		source: "NEW_ACTION",
  		action: action
  	});
  }
});

module.exports = AppDispatcher;