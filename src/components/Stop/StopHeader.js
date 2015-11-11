import React from 'react';

let styles = {
  base: {
    textAlign: 'center'
  }
}

class StopHeader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {stopname: props.initStopname, 
                  stopid: props.initStopid};
  }

  setName(name) {
    this.setState({stopname: name});
  }

  setId(id) {
    this.setState({stopid: id});
  }

  render() {
    return (
      <header style={styles.base}>
        <h1>{this.props.initStopname}</h1>
        <span>(Stop {this.props.initStopid})</span>
      </header>
    )
  }
};

module.exports = StopHeader;
