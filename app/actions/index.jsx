var redux = require('redux');
var TodoApp = require('TodoApp');
var axios = require('axios');

console.log('Starting redux actions');




export var changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name: name
  };
};



export var addHobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    hobby: hobby
  };
};

export var removeHobby = (id) => {
  return {
    type: 'REMOVE_HOBBY',
    id: id
  };
};

export var addMovie = (title, genre) => {
  return {
    type: 'ADD_MOVIE',
    title: title,
    genre: genre

  };
};

export var removeMovie = (id) => {
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



export var startLocationFetch = () => {
  return {
    type: 'START_LOCATION_FETCH'

  };
};

export var completeLocationFetch = (url) => {
  return {
    type: 'COMPLETE_LOCATION_FETCH',
    url
  };
};

export var fetchLocation = () => {
  return (dispatch, getState) => {
    dispatch(startLocationFetch());

    axios.get('http://ipinfo.io').then(function (res) {
      var loc = res.data.loc;
      var baseUrl = 'http://maps.google.com?q='

      dispatch(completeLocationFetch(baseUrl + loc));

    });
  };
};
