require('normalize.css');
require('flexboxgrid');
require('purecss/build/pure-min.css');
require('../styles/App.css');

import React from 'react';
import { Router, Route, Link } from 'react-router'
import { createHistory } from 'history'

import Header from './Header/Header'
import StopList from './Stop/StopList'
import Stop from './Stop/Stop'
import RouteList from './Route/RouteList'
import SingleRoute from './Route/Route'
import StyleGuide from './StyleGuide/StyleGuide'
import Instructions from './Instructions/Instructions'
import FindStops from './Stop/FindStops'

const history = createHistory();

class App extends React.Component {
  render() {

    let body = {
      marginTop: '3.25em',
      paddingTop: '1em'
    }

    return (
      <article style={body}>
        <Header />
        <section className="container">
          {this.props.children}
        </section>
      </article>
    )
  }
}

class AppRouter extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Route path="/" component={App}>
          <Route path="stop" component={StopList}>
            <Route path=":stopid" component={Stop}/>
          </Route>
          <Route path="stop/geo" component={StopList} />
          <Route path="findStops" component={FindStops} />
          <Route path="route" component={RouteList}>
            <Route path=":routeid" component={SingleRoute}/>
          </Route>
          <Route path="styleguide" component={StyleGuide} />
          <Route path="*" component={Instructions}/>
        </Route>
      </Router>
    )
  }
}

export default AppRouter
