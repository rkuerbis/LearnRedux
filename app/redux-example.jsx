var redux = require('redux');
var TodoApp = require('TodoApp');


console.log('Starting redux example');

// Pure function





var stateDefault = {
  name: 'Anonymous',
  hobbies: [],
  movies: []

};

// Variable definitions
// --------------------
var nextHobbyId = 1;
var nextMovieId = 1;

// var reducer = (state = {name: 'Anonymous'}, action) => {
//
// var oldreducer = (state = stateDefault, action) => {
//
//   // state = state || {name: 'Anonymous'};
//
//   console.log('New action', action);
//   switch (action.type) {
//     case 'CHANGE_NAME':
//       return {
//         ...state,
//         name: action.name
//       };
//     case 'ADD_HOBBY':
//       return {
//         ...state,
//         hobbies: [
//           ...state.hobbies,
//           {
//             id: nextHobbyId++,
//             hobby: action.hobby
//           }
//         ]
//       };
//
//     case 'REMOVE_HOBBY':
//       return {
//         ...state,
//         hobbies: state.hobbies.filter((hobby) => hobby.id !== action.id)
//
//       };
//
//     case 'ADD_MOVIE':
//       return {
//         ...state,
//         movies: [
//           ...state.movies,
//           {
//             id: nextMovieId++,
//             title: action.title,
//             genre: action.genre
//           }
//         ]
//       };
//
//       case 'REMOVE_MOVIE':
//         return {
//           ...state,
//           movies: state.movies.filter((movie) => movie.id !== action.id)
//       };
//
//
//
//     default:
//       return state;
//   }
// };



// Name reducer and action generators
// ----------------------------------
var nameReducer = (state = 'Anonymous', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name;
    default:
      return state;
  };
};

var changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name: name
  };
};


// Hobbies reducer and action generators
// --------------------------------------
var hobbiesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HOBBY':
      return [
        ...state,
        {
          id: nextHobbyId++,
          hobby: action.hobby
        }
      ];
    case 'REMOVE_HOBBY':
      return state.filter((hobby) => hobby.id !== action.id);
    default:
      return state;
  };
};

var addHobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    hobby: hobby
  };
};

var removeHobby = (id) => {
  return {
    type: 'REMOVE_HOBBY',
    id: id
  };
};

// Movies reducer and action generators
// -----------------------------------
var moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [
        ...state,
        {
          id: nextMovieId++,
          title: action.title,
          genre: action.genre
        }
     ];
    case 'REMOVE_MOVIE':
      return  state.filter((movie) => movie.id !== action.id)

    default:
      return state;
  };
};

var addMovie = (title, genre) => {
  return {
    type: 'ADD_MOVIE',
    title: title,
    genre: genre

  };
};

var removeMovie = (id) => {
  return {
    type: 'REMOVE_MOVIE',
    id: id
  };
};

// var removeMovieTitle = (removetitle) => {
//   var movieid = 1;
//   var updatedTodos = this.state.movies.map((movies) => {
//     if (removetitle === movies.title) {
//       movieid = movies.id;
//     }
//     return;
//   });
//   return {
//     type: 'REMOVE_MOVIE',
//     id: movieid
//
//   }
// };



var reducer = redux.combineReducers({
  name: nameReducer,
  hobby: hobbiesReducer,
  movie: moviesReducer
});


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

store.dispatch(changeName('NestedFunction'));
console.log('Name should be NestedFunction', store.getState());

store.dispatch(addHobby('Driving'));
console.log('Hobby added should be "Driving"', store.getState());

store.dispatch(removeHobby('Driving'));
console.log('Hobby removed should be "Driving"', store.getState());

store.dispatch(addMovie('The Post Man', 'Apocalyptical'));
console.log('Movie added should be title = "The Post Man", genre = "Apocalyptical"', store.getState());

store.dispatch(removeMovie(3));
console.log('Movie removed should be id = 3, title = "The Post Man"', store.getState());

// store.dispatch(addMovie('The Post Man', 'Apocalyptical'));
// console.log('Movie added should be title = "The Post Man", genre = "Apocalyptical"', store.getState());
//
// store.dispatch(removeMovieTitle('The Post Man'));
// console.log('Movie removed should be id = 3, title = "The Post Man"', store.getState());
