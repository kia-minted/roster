var assign = require('object-assign');
var Dispatcher = require('flux').Dispatcher;

var AppDispatcher = assign(new Dispatcher(), {
  handleViewAction: function(action){
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    });
  }
});

module.exports = AppDispatcher;
