import AppDispatcher from '../dispatcher/AppDispatcher'
import AppConstants from '../constants/AppConstants'
import request from'superagent';
import jsonp from 'superagent-jsonp';

var AppActions = {
  addItem(item ){
    var runDispatch = function(data) {
		AppDispatcher.handleNewAction({
	    	actionType:AppConstants.PULL_DATA,
	    	item: data.body
    	})	
    };

    request
   .get('http://api.hrtb.us/api/stops/near/36.863794/-76.285608/')
   .use(jsonp)
   .end(function(err, res){
      console.log(res);
      runDispatch(res);
    });  
  },

  addItem2(item) {
  	var runDispatch = function(data) {
		AppDispatcher.handleNewAction({
	    	actionType:AppConstants.PULL_DATA,
	    	item: data.body
    	})	
    };

    request
   .get('http://api.hrtb.us/api/stops/near/36.86538/-76.30402/')
   .use(jsonp)
   .end(function(err, res){
      console.log(res);
      runDispatch(res);
    });  
  },

  addItem3(item) {
    var runDispatch = function(data) {
    	AppDispatcher.handleNewAction({
    		actionType:AppConstants.PULL_DATA,
    		item: data.body
    	})
    };

  	request
   .get('http://api.hrtb.us/api/stops/near/37.0638735/-76.4938087/')
   .use(jsonp)
   .end(function(err, res){
      console.log(res);
      runDispatch(res);
    });  
  }
}

module.exports = AppActions
