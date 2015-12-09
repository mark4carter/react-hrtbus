import AppDispatcher from '../dispatcher/AppDispatcher'
import AppConstants from '../constants/AppConstants'
import EventEmitter from 'events'
import stops from './mocks/stops'

const CHANGE_EVENT = 'change'

var jsonData = 0;


//keep this, will hold all location and stopData
var stopListData = {};

var geoListData = {};

class StopStore extends EventEmitter {

  constructor() {
    super()
  }

  emitChange() {
    this.emit(CHANGE_EVENT)
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback)
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  }

  get() {
    return stopListData;
  }

  getGeoData() {
    return geoListData;
  }

}

const stopStore = new StopStore()

AppDispatcher.register(function(action) {

  if (action.action.actionType == AppConstants.PULL_DATA) {
    stopListData.stops = action.action.stopData;
  }

  if (action.action.actionType == AppConstants.PULL_GEO) {
    geoListData.locationCoords = action.action.geoData;
  }

  stopStore.emitChange()

})

export default stopStore
