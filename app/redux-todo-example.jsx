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

var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'work'

});

console.log('SearchText should be "work"', store.getState());
