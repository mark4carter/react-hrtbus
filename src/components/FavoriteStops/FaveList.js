import 'babel-core/polyfill'
import React from 'react'
import Radium from 'radium'
import Stop from '../Stop/Stop'
import { connect } from 'react-redux'
import favestops from '../../stores/mocks/fave-stops'
import {
  removeLocalStops,
  fetchFaveStop,
  toggleFaveStop
} from '../../redux/modules/favorites/fave-stop-actions'

class FaveList extends React.Component {

  constructor() {
    super()
  }

  componentDidMount() {
    this.props.faves.faveStops.forEach(stop => {
      this.props.dispatch(fetchFaveStop(stop))
    })
  }

  toggleFaveStop(stopId) {
    this.props.dispatch(toggleFaveStop(stopId))
  }

  checkFavorited(stopId) {
    return this.props.faves.faveStops.indexOf(stopId) !== -1
  }

  render() {

    return (
      <div>
      <section>
        <div>
        {this.props.faves.faveStopApi.map(stop => {
          return (
            <div>
              {this.props.faves.faveStops.map(fave => {
                let isFavorited = this.checkFavorited(stop.stopId);
                if (fave == stop.stopId) {
                  return (
                    <div>
                      <Stop stop={stop} 
                            faves= {this.props.faves}
                            toggleFaveStop={this.toggleFaveStop.bind(this, stop.stopId)}
                            isFavorited={isFavorited} />
                    </div>
                  )
                }
              })}
            </div>
          )
        })}
        </div>
        <div>
          <button onClick= {() => {
            dispatch(removeLocalStops());
          }}> Empty Local Storage
          </button>
        </div>
      </section>
      </div>
    )
  }
}

/*FaveList.propTypes = {
    dispatch: React.PropTypes.func.isRequired
  }*/

export default connect(
  state => ({
    data: state.stops,
    faves: state.faveStops
  })
)(FaveList)
