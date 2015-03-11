var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('../constants/AppConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _state = {
  text: 'initial'
};


var AppStore = assign(new EventEmitter(), {
  getState: function(){
    return _state;
  },
  emitChange: function(){
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback){
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback){
    this.removeListener(CHANGE_EVENT, callback);
  },
  dispatcherIndex: AppDispatcher.register((payload)=>{
    console.log(payload);
    var action = payload.action;

    if(action.actionType === AppConstants.TEST){
      _state = action.data;
      AppStore.emitChange();
    }

    return true;
  })
});


module.exports = AppStore;
