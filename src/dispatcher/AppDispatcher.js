import {Dispatcher} from 'flux';
import assign from 'object-assign';

var AppDispatcher = assign(new Dispatcher(), {
  handlePullStopData(action) {
  	this.dispatch({
  		action: action
  	});
  },

  handleGeoData(action) {
    this.dispatch({
      action: action
    });
  }
});

module.exports = AppDispatcher;