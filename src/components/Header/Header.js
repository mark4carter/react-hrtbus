require('./app-header.css');

import React from 'react'
import Radium from 'radium'
import Colors from '../common/Colors'
import Icon from '../common/Icon'
import { Router, Route, Link } from 'react-router'

let style = {

  header: {
    background: Colors.blue.dark
  },

  activeLink: {
    background: Colors.blue.base,
    height: '3.25rem',
    boxShadow: `inset 0 -.25rem #ffffff`
  }

}

class Header extends React.Component {
  render() {
    return (
      <header className="app-header" style={style.header}>
        <div className="container app-header--container">

          <Link className="app-header--logo" to="/">
            <Icon source="/images/logo-white" height="36" width="36"/>
          </Link>
          <Link className="app-header--heading" to="/">
            <h1>HRTb.us</h1>
          </Link>

          <ul className="app-header--menu">
            <li>
              <Link to="/findStops" activeStyle={style.activeLink}>Find Stops</Link>
            </li>
            <li>
              <Link to="/stop" activeStyle={style.activeLink}>Stop</Link>
            </li>
            <li>
              <Link to="/route" activeStyle={style.activeLink}>Route</Link>
            </li>
          </ul>

        </div>
      </header>
    )
  }
}

export default Radium(Header)
