import React from 'react'
import Radium from 'radium'
import Stop from './Stop'
import StopStore from '../../stores/StopStore'
import AppActions from '../../actions/AppActions'
import AppConstants from '../../constants/AppConstants'

function getStops() {
  return StopStore.get()
}

function getGeo() {
  return StopStore.getGeoData()
}

class StopList extends React.Component {

  constructor() {
    super()
    this.state = {}
    this.state.stopListData = getStops()
    this.state.geoListData = getGeo()
    this._onChange = this._onChange.bind(this);
    this.startAPI = this.startAPI.bind(this);
  }

  componentDidMount() {
    StopStore.addChangeListener(this._onChange)
    this.startGeoData();
    this.interval = setInterval(this.startAPI, 10000);
  }

  //only if location data has been loaded, resend API request
  startAPI() {
    if (this.state.geoListData.locationCoords) {
      AppActions.pullStopData(this.state.geoListData.locationCoords);
    }
  }

  startGeoData() {
    AppActions.geoCheck();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    StopStore.removeChangeListener(this._onChange)
  }

  _onChange() {
    console.log('settingstate');
    var obj = {};
    obj.stopListData = getStops();
    obj.geoListData = getGeo();
    this.setState(obj);
  }

  render() {

    if (!this.state.geoListData.locationCoords) {
      //probably needs better CSS
      //return only loading gif until data's been set
      return (
                <div><center>
                  <img src="../../images/466.gif" /> <br />
                  <h2>Getting Your Location</h2>
                </center></div>
            )
    } else if (this.state.geoListData.locationCoords.coords == AppConstants.FAIL ) {
      return (
                <div><center>
                  <h2>Location Failed</h2>
                </center></div>
            )

    } else if (!this.state.stopListData.stops) {
      return (
                <div><center>
                  <img src="../../images/466.gif" /> <br />
                  <h2>Gathering Data</h2>
                </center></div>
            )
    }
    return (
      <section>   
        {this.state.stopListData.stops.map(function(stop) {
          return <Stop key={stop.stop_id} stop={stop}/>
        })}
      </section>
    )
  }
};

export default StopList
