import React from 'react';
import Stop from './Stop';
import Radium from 'radium';

let styles = {
  base: {
    maxWidth: '540px',
    background: 'blue',
    margin: '0 auto'
  }
};

var arr = ['MONTICELLO & 15TH', 'MONTICELLO & 18TH', 'MONTICELLO & 19TH']

class StopList extends React.Component {
  render() {
    return (
      <section style={styles.base}>
        {arr.map(function (nos) {
          return <Stop initId={nos}/>;
        })}
      </section>
    )
  }
}

module.exports = Radium(StopList);
