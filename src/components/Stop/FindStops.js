import React from 'react'
import Radium from 'radium'
import Stop from './Stop'
import StopStore from '../../stores/StopStore'
import AppActions from '../../actions/AppActions'
import AppConstants from '../../constants/AppConstants'
import { Link } from 'react-router'

class FindStops extends React.Component {

  constructor() {
    super()
  }

  componentDidMount() {
  }


  componentWillUnmount() {
  }

  _onChange() {
  }

  render() {

    return (
      <Link to="/stop"> Use Gps </Link>
    )

    if (!this.state.geoListData.locationCoords) {
      return (
      <div>
        <div onClick={runGeo}><strong>Use GPS </strong>
        </div>
      </div>
      )
    } else if (this.state.geoListData.locationCoords.coords.latitude == AppConstants.FAIL) {
      return (
        <div> FAIL </div>
        )
    } else {
      console.log("Latitude = " + this.state.geoListData.locationCoords.coords.latitude);
    }

    return(
      <div>
        <div onClick={runGeo}><strong>Use GPS </strong>
        </div>
      </div>
      )
    
  }
};

export default FindStops
