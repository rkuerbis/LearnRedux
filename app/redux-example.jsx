var redux = require('redux');

console.log('Starting redux example');

// Pure function

var reducer = (state = {name: 'Anonymous'}, action) => {
  // state = state || {name: 'Anonymous'};

  console.log('New action', action);
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
    default:
      return state;
  }
};

var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState', currentState);

var action = {
  type: 'CHANGE_NAME',
  name: 'Andrew'
};

store.dispatch(action);

console.log('Name should be Andrew', store.getState());

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Ralph'

});

console.log('Name should be Ralph', store.getState());
