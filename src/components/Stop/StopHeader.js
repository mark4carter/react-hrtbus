import React from 'react';
import mData from './mData';

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

  /*componentDidMount() {
    $.get(this.props.source, function(result) {
      var lastGist = result[0];
      if (this.isMounted()) {
        this.setState({
            stopname: lastGist.stopName,
            stopid: lastGist.Id
        });
      }
    }.bind(this));
  }*/

  render() {
    return (
      <header style={styles.base}>
        <h1>{this.state.stopname}</h1>
        <span>{this.state.stopid}</span>
      </header>
    )
  }
};

/*StopHeader.propTypes = {
  initStopname: React.PropTypes.string,
  initStopid: React.PropTypes.string
}

StopHeader.defaultProps = {
  initStopname: 'propOne',
  initStopid: 'prop2'
}*/

module.exports = StopHeader;
