import React from 'react'
import Radium from 'radium'
import RouteBadge from './RouteBadge'
import TimeBadge from './TimeBadge'
import Colors from '../../common/Colors'

let style = {
  base: {
    fontSize: '14px',
    padding: '1rem',
    borderBottom: '1px solid ' + Colors.beige.dark,
  },

  cell: {
    textAlign: 'center',
    padding: '.5rem'
  }

}

function alternateColor(index) {
  if (index % 2 !== 0) {
    return { background: Colors.beige.light }
  } else {
    return { background: 'white' }
  }
}

class Bus extends React.Component {

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <tr style={[
          style.base,
          alternateColor(this.props.index)
        ]}>
        <td style={style.cell}>
          <RouteBadge background={Colors.blue.base} route={this.props.bus.route_id} />
        </td>
        <td style={style.cell}>
          {this.props.bus.destination}
        </td>
        <td style={style.cell}>
          <TimeBadge time={this.props.bus.time_to_arrival}/>
        </td>
      </tr>
    )
  }
}

export default Radium(Bus)
