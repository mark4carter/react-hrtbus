var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppConstants = require('../constants/AppConstants');


var CHANGE_EVENT = 'change';

var pulledData;

var AppStore = assign({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },


  addChangeListener: function(callback) {
  	this.on(CHANGE_EVENT, callback);
  },

  getPulledData: function() {
  	return pulledData;
  }
});

AppDispatcher.register(function(payload){

  var actionz = payload.action;

  if (actionz.actionType == AppConstants.PULL_DATA){
  	pulledData = actionz.item;
  	console.log(pulledData);
  }
  AppStore.emitChange();
  return true;
});

module.exports = AppStore;
