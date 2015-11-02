var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');


//Still trying to find a better way 
//to make API Calls w/o JQuery

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
  	window.myJsonpCallback = function(data) {
		AppDispatcher.handleNewAction({
	    	actionType:AppConstants.PULL_DATA,
	    	item: data
    	})	
    };

	var scriptEl = document.createElement('script');
	scriptEl.setAttribute('src',
	    'http://api.hrtb.us/api/stops/near/37.0641593/-76.4929986/?callback=myJsonpCallback');
	document.body.appendChild(scriptEl);
  },


  consoleThis: function() {
  	console.log("maybe");
  }
}

module.exports = AppActions
