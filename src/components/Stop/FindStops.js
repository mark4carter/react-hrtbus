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
  }
};

export default FindStops
