var redux = require('redux');

console.log('Starting todo redux example');

// Pure function

var stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: []

};


var reducer = (state = stateDefault, action) => {
  // state = state || {name: 'Anonymous'};

  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      };
    default:
      return state;
  }

};

// var store = redux.createStore(reducer);

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));


// Subscribe to changes

var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('Name is', state.name);
  document.getElementById('app').innerHTML = state.searchText;
});

// unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'work'

});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'dog'

});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Something else'

});

console.log('SearchText should be "work"', store.getState());
