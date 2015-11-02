import React from 'react';
import Stop from './Stop';
import Radium from 'radium';
import AppStore from '../../stores/AppStore';
import AppActions from '../../actions/AppActions';


let styles = {
  base: {
    maxWidth: '540px',
    background: 'blue',
    margin: '0 auto'
  }
};

function getStopsState() {
  var sentData = AppStore.getPulledData();
  console.log(sentData);
  return {dataz: sentData};
}


class StopList extends React.Component {

  constructor(props) {    
    super(props);
    this._onChange = this._onChange.bind(this);
    var initData = AppStore.getPulledData();
    this.state = {dataz: initData};
    AppActions.addItem('');
  }

  componentDidMount() {
    AppStore.addChangeListener(this._onChange);
  }

  render() {
    console.log('RENDEREDDD')
    if (this.state.dataz) {
      return (
        <section style={styles.base}>
        <h3> {this.state.dataz[0].stopName}</h3>
        <span> {this.state.dataz.map(function (eachStopp) {
          return <div>{eachStopp.stopName}</div>;
        })} </span>
        <br />
        ?????--Below Does Not Update--??????

          {this.state.dataz.map(function (eachStop) {
            return <Stop initId={eachStop.stopName}/>;
          })}
        </section>
      )
    } else {
      return (<div></div>)
    }
  }

  _onChange() {
    console.log('onChange');
    this.setState(getStopsState());
  }
}

module.exports = Radium(StopList);
