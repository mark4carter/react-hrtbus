import AppDispatcher from '../dispatcher/AppDispatcher'
import AppConstants from '../constants/AppConstants'
import request from'superagent';
import jsonp from 'superagent-jsonp';

var pulledStops;

var AppActions = {

  pullStopData(coords){

    var lat = coords.coords.latitude
    var lon = coords.coords.longitude    

    /*'http://lit-inlet-3610.herokuapp.com/api/v2/stops/near/36.863794/-76.285608/'
      http://api.hrtb.us/api/stops/near/36.863794/-76.285608/

      http://api.hrtb.us/api/v2/stops/near/36.863794/-76.285608/
    */
    
    request
   .get('http://api.hrtb.us/api/v2/stops/near/'+ lat + '/' + lon + '/')
   .use(jsonp)
   .end(function(err, res){
      if (err) console.log(err);
      
      if (res) {
        pulledStops = res.body;
        AppDispatcher.handlePullStopData({
          actionType:AppConstants.PULL_DATA,
          stopData: pulledStops
        })
      };
    });


  },

  //pulled from originalbusfinder
  //onFail sends downtown coordinates
  geoCheck() {
	  var onFail = function() {
	  	console.log("onFail");

	  	//mock downtownCoords
	  	var failCoords = {	coords : AppConstants.FAIL
	  												};

      AppDispatcher.handleGeoData({
        actionType:AppConstants.PULL_GEO,
        geoData: failCoords  //<---coordinates for a failed coords
      })
		};

    var timeout = setTimeout(onFail, 5000);

    var onSuccess = function(position) {
      clearTimeout(timeout);

      AppDispatcher.handleGeoData({
        actionType:AppConstants.PULL_GEO,
        geoData: position  //<---coordinates gathered from geoCheck()
      })

      AppActions.pullStopData(position);
    };

    navigator.geolocation ?
			navigator.geolocation.getCurrentPosition(onSuccess, onFail) : onFail();

  }
}

module.exports = AppActions