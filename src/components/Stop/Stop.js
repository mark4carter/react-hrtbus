import React from 'react'
import Radium from 'radium'
import Colors from '../common/Colors'
import Bus from './Bus/Bus'

const style = {

  base: {
    marginBottom: '1.5em'
  },

  header: {
    background: Colors.blue.dark,
    padding: '1em',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'white'
  },

  inactive: {
    background: 'transparent',
    color: 'inherit',
    padding: '0.25em'
  },

  table: {
    width: '100%'
  },

  destination: {
    display: 'flex',
    flex: '1',
    alignItems: 'center',
    justifyContent: 'center'
  },

  key: {
    background: Colors.blue.base,
    color: 'white'
  },

  cell: {
    fontWeight: 'normal',
    fontSize: '.875em',
    padding: '.25rem 0'
  }

}

class StopKey extends React.Component {
  render() {
    return (
      <thead>
        <tr style={style.key}>
          <th style={style.cell}>Route</th>
          <th style={[style.cell, style.destination]}>Destination</th>
          <th style={style.cell}>Arriving</th>
        </tr>
      </thead>
    )
  }
}

class NoBuses extends React.Component {
  render() {

    let style = {
      textAlign: 'center',
      margin: '0'
    }

    return (
      <p style={style}>No Buses Scheduled</p>
    )
  }
}

StopKey = Radium(StopKey)

class Stop extends React.Component {

  constructor() {
    super()
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {

    return (
      <section style={style.base}>

        <header style={[
            style.header,
            this.props.stop.buses.length === 0 && style.inactive
          ]}>
          <h3>{this.props.stop.stopName}</h3>
          <span>{this.props.stop.stop_id}</span>
        </header>

        {(() => {

          if (this.props.stop.buses.length === 0) {

            return <NoBuses />

          } else {

            return (
              <table style={style.table}>
                <StopKey />
                <tbody>
                  {
                    this.props.stop.buses.map(function(bus, index) {
                      return (
                        <Bus
                          key={bus.bus_number}
                          index={index}
                          bus={bus}/>
                      )
                    })
                  }
                </tbody>
              </table>
            )

          }
        }())}

      </section>
    )
  }
};

export default Radium(Stop)
