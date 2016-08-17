var redux = require('redux');

console.log('Starting redux example');

// Pure function


var stateDefault = {
  name: 'Anonymous',
  hobbies: [],
  movies: []

};

var nextHobbyId = 1;

var nextMovieId = 1;

// var reducer = (state = {name: 'Anonymous'}, action) => {

var reducer = (state = stateDefault, action) => {

  // state = state || {name: 'Anonymous'};

  console.log('New action', action);
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
    case 'ADD_HOBBY':
      return {
        ...state,
        hobbies: [
          ...state.hobbies,
          {
            id: nextHobbyId++,
            hobby: action.hobby
          }
        ]
      };

    case 'REMOVE_HOBBY':
      return {
        ...state,
        hobbies: state.hobbies.filter((hobby) => hobby.id !== action.id)

      };

    case 'ADD_MOVIE':
      return {
        ...state,
        movies: [
          ...state.movies,
          {
            id: nextMovieId++,
            title: action.title,
            genre: action.genre
          }
        ]
      };

      case 'REMOVE_MOVIE':
        return {
          ...state,
          movies: state.movies.filter((movie) => movie.id !== action.id)
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

  console.log('New state', store.getState());
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
  type: 'ADD_HOBBY',
  hobby: 'Running'

});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Walking'

});

store.dispatch({
  type: 'REMOVE_HOBBY',
  id: 2

});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Mad Max',
  genre: 'Action'

});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'James Bond',
  genre: 'Action'

});

store.dispatch({
  type: 'REMOVE_MOVIE',
  id: 1

});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Ralph'

});



store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Emily'

});
console.log('Name should be Emily', store.getState());
