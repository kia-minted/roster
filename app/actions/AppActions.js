var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var AppConstants = require('../constants/AppConstants.js');

var AppActions = {
  testAction: function(text){
    console.log(`action ${text}`);
    AppDispatcher.handleViewAction({
      actionType: AppConstants.TEST,
      data: {text: text}
    });
  }
};

module.exports = AppActions;
