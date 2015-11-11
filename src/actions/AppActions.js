var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var request = require('superagent');
var jsonp = require('superagent-jsonp');

var AppActions = {
  addItem: function(item){
    window.myJsonpCallback = function(data) {
		AppDispatcher.handleNewAction({
	    	actionType:AppConstants.PULL_DATA,
	    	item: data
    	})	
    };

	var scriptEl = document.createElement('script');
	scriptEl.setAttribute('src',
	    'http://api.hrtb.us/api/stops/near/36.863794/-76.285608/?callback=myJsonpCallback');
	document.body.appendChild(scriptEl);
  },

  addItem2: function(item) {
  	window.myJsonpCallback = function(data) {
		AppDispatcher.handleNewAction({
	    	actionType:AppConstants.PULL_DATA,
	    	item: data
    	})	
    };

	var scriptEl = document.createElement('script');
	scriptEl.setAttribute('src',
	    'http://api.hrtb.us/api/stops/near/36.86538/-76.30402/?callback=myJsonpCallback');
	document.body.appendChild(scriptEl);
  },

  addItem3: function(item) {
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
   });  },


  consoleThis: function() {
  	console.log("maybe");
  }
}

module.exports = AppActions
