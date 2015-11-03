import React from 'react';
import Radium from 'radium';
import StopHeader from './StopHeader';
import StopStatus from './StopStatus';

let StopStyle = {
  base: {
    backgroundColor: 'orange',
    color: 'white'
  }
};

class Stop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {passedName: props.stopNamePass};
    this.state = {passedStopId: props.stopIdPass};
  }

  render() {
    return (
      <section>
        <StopHeader initStopname={this.props.stopNamePass} initStopid={this.props.stopIdPass}/>
        <div style={StopStyle.base}>
          <h1>A Stop Thing Potato</h1>
        </div>
      </section>
    )
  }
};

module.exports = Radium(Stop);
