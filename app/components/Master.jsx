var React = require('react');
var AppActions = require('../actions/AppActions.js');
var AppStore = require('../stores/AppStore.js');

function getAppState() {
  return AppStore.getState();
}

var App = React.createClass({
  getInitialState (){
    return getAppState();
  },
  componentDidMount (){
    AppStore.addChangeListener(this._onChange);
  },
  componentWillUnmount (){
    AppStore.removeChangeListener(this._onChange);
  },
  _onChange (){
    this.setState(getAppState());
  },
  handleButtonClick: ()=>{
    AppActions.testAction('100');
  },
  render: function(){
    return (
      <div>
        <p>{this.state.text}</p>
        <button onClick={this.handleButtonClick}>Click Me</button>
      </div>
    );
  }
});


module.exports = App;
