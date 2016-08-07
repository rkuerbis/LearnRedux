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

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes

var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('Name is', state.name);
  document.getElementById('app').innerHTML = state.name;
});

// unsubscribe();

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



store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Emily'

});
console.log('Name should be Emily', store.getState());
