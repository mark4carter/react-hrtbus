import AppDispatcher from '../dispatcher/AppDispatcher';
import {EventEmitter} from 'events';
import assign from 'object-assign';
import AppConstants from '../constants/AppConstants';


var CHANGE_EVENT = 'change';

var pulledData;

var AppStore = assign({}, EventEmitter.prototype, {
  emitChange() {
    this.emit(CHANGE_EVENT);
  },


  addChangeListener(callback) {
  	this.on(CHANGE_EVENT, callback);
  },

  getPulledData() {
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
