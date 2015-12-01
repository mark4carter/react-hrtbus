import AppDispatcher from '../dispatcher/AppDispatcher'
import AppConstants from '../constants/AppConstants'
import stops from '../stores/mocks/stops'
import request from'superagent';
import jsonp from 'superagent-jsonp';
import reqwest from 'reqwest';

var AppActions = {

  pullStopData(coords){

    var lat = coords.coords.latitude
    var lon = coords.coords.longitude

    

    /*'http://lit-inlet-3610.herokuapp.com/api/v2/stops/near/36.863794/-76.285608/'
      http://api.hrtb.us/api/stops/near/36.863794/-76.285608/

      http://api.hrtb.us/api/v2/stops/near/36.863794/-76.285608/
    */

    request
   .get('http://lit-inlet-3610.herokuapp.com/api/v2/stops/near/36.863794/-76.285608/')
   .timeout(1000)
   .use(jsonp)
   .end(function(err, res){
      if (err) console.log(err);
      console.log('jump');
      if (res) console.log(res);
    });


    /*reqwest({
      type: 'jsonp',
      url: 'http://api.hrtb.us/api/v2/stops/near/36.863794/-76.285608/',  
      jsonpCallback: 'foo'
    })

    function foo(data) {
      console.log(data);
    }*/


    //Instead of randomJSON, we can pull the API from here and
    //put the data inside here
    var randomJson = stops;

		AppDispatcher.handlePullStopData({
	    actionType:AppConstants.PULL_DATA,
      stopData: stops
  	})
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
        geoData: failCoords  //<---coordinates gathered from geoCheck()
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