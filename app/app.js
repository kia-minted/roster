var React = require('react');
var App = require('./components/Master.jsx');

console.log('rendering happening');
React.render(
  <App/>,
  document.getElementById('rosterApp')
);
