var redux = require('redux');
var TodoApp = require('TodoApp');
var axios = require('axios');
var math = require('mathjs');


console.log('Starting redux example');

// Pure function

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();



var stateDefault = {
  name: 'Anonymous',
  hobbies: [],
  movies: []

};

// Variable definitions
// --------------------

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






// Subscribe to changes

var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('New state', store.getState());

  if (state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading...';

  } else if (state.map.url) {
    document.getElementById('app').innerHTML = '<a href="' + state.map.url + '" target="_blank">View Your Location</a>';
  }

});



// unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);



store.dispatch(actions.fetchLocation());



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

store.dispatch(actions.changeName('NestedFunction'));
console.log('Name should be NestedFunction', store.getState());

store.dispatch(actions.addHobby('Driving'));
console.log('Hobby added should be "Driving"', store.getState());

store.dispatch(actions.removeHobby('Driving'));
console.log('Hobby removed should be "Driving"', store.getState());

store.dispatch(actions.addMovie('The Post Man', 'Apocalyptical'));
console.log('Movie added should be title = "The Post Man", genre = "Apocalyptical"', store.getState());

store.dispatch(actions.removeMovie(3));
console.log('Movie removed should be id = 3, title = "The Post Man"', store.getState());

// store.dispatch(actions.addMovie('The Post Man', 'Apocalyptical'));
// console.log('Movie added should be title = "The Post Man", genre = "Apocalyptical"', store.getState());
//
// store.dispatch(actions.removeMovieTitle('The Post Man'));
// console.log('Movie removed should be id = 3, title = "The Post Man"', store.getState());



// expressions
console.log('math 2.718', math.round(math.e, 3));           // 2.718
console.log('math 0.75', math.atan2(3, -3) / math.pi);     // 0.75
console.log('math 4', math.log(10000, 10));             // 4
console.log('math 2i', math.sqrt(-4));                   // 2i
console.log('math  [[7, 0], [0, 7]]', math.pow([[-1, 2], [3, 1]], 2));  // [[7, 0], [0, 7]]

console.log('math 7.8', math.eval('1.2 * (2 + 4.5)'));
console.log('math 7.8', math.eval('1.2 * (2 + 4.5)'));    // 7.8
console.log('math 2 inch', math.eval('5.08 cm to inch'));    // 2 inch -----FAILED
console.log('math 0.5', math.eval('sin(45 deg) ^ 2'));    // 0.5
console.log('math 3 + 2i', math.eval('9 / 3 + 2i'));         // 3 + 2i
console.log('math -7', math.eval('det([-1, 2; 3, 1])')); // -7

// chained operations
console.log('chained operations');
var a = math.chain(3)
    .add(4)
    .multiply(2)
    .done();
// print(a);      // 14
console.log('math a = 14, a = ', a);

// mixed use of different data types in functions
console.log('mixed use of data types');
console.log('number + Array, [9, 10]', math.add(4, [5, 6]));                   // number + Array, [9, 10]
console.log('Unit * number,  15 mm', math.multiply(math.unit('5 mm'), 3));   // Unit * number,  15 mm
console.log('Array - number, [-3, -2, -1]', math.subtract([2, 3, 4], 5));           // Array - number, [-3, -2, -1]
console.log('Matrix + Array, [6, 8]',math.add(math.matrix([2, 3]), [4, 5])); // Matrix + Array, [6, 8]

/**
 * Helper function to output a value in the console. Value will be formatted.
 * @param {*} value
 **/
function print (value) {
  var precision = 14;
  console.log('MATH value, precision', math.format(value, precision));
  console.log('MATH value, precision', precision);
}
var value = 1.234567890;
print (value);

value = 1.2345678901234567890;
print (value);




// configure the default type of numbers as BigNumbers
math.config({
  number: 'BigNumber',  // Default type of number:
                        // 'number' (default), 'BigNumber', or 'Fraction'
  precision: 40         // Number of significant digits for BigNumbers
});
print (value);


console.log('round-off errors with numbers');
console.log('MATH add(0.1+0.2) =  number, 0.30000000000000004', math.add(0.1, 0.2));    // number, 0.30000000000000004
console.log('MATH add(0.3+0.2) =  number, 1.4999999999999998', math.divide(0.3, 0.2)); // number, 1.4999999999999998
console.log('');

console.log('no round-off errors with BigNumbers');
console.log('no round-off errors BigNumber, 0.3 = ', math.add(math.bignumber(0.1), math.bignumber(0.2)));     // BigNumber, 0.3
console.log('no round-off errors BigNumber, 1.5 = ', math.divide(math.bignumber(0.3), math.bignumber(0.2)));  // BigNumber, 1.5
console.log('');

console.log('create BigNumbers from strings when exceeding the range of a number');
console.log('no round-off errors BigNumber, Infinity      WRONG', math.bignumber(1.2e+500));    // BigNumber, Infinity      WRONG
console.log('no round-off errors BigNumber, 1.2e+500           ', math.bignumber('1.2e+500'));  // BigNumber, 1.2e+500
console.log('');

// one can work conveniently with BigNumbers using the expression parser.
// note though that BigNumbers are only supported in arithmetic functions
console.log('use BigNumbers in the expression parser');
console.log('no round-off errors BigNumber, 0.3 = ', math.eval('0.1 + 0.2'));  // BigNumber, 0.3
console.log('no round-off errors BigNumber, 1.5 = ', math.eval('0.3 / 0.2'));  // BigNumber, 1.5
console.log('');

console.log('no round-off errors with BigNumbers');
console.log('no round-off errors BigNumber, 0.3 = ', math.add(math.bignumber(0.1), math.bignumber(0.2)));     // BigNumber, 0.3
console.log('no round-off errors BigNumber, 1.5 = ', math.divide(math.bignumber(0.3), math.bignumber(0.2)));  // BigNumber, 1.5
console.log('');

var value = math.multiply(math.bignumber(0.1000000000000000000000000007), math.bignumber(0.20000004));
console.log('multiply = ', value);
var addd = math.bignumber(value);
console.log('multiply = ', addd);
print(value);

var value = math.divide(math.bignumber(0.1), math.bignumber(0.2));
console.log('divide = ', value);
var addd = math.add(0.0, value);
console.log('divide = ', addd);


var subt = math.subtract(0.1, 0.2);

var addd = math.add(0.1, 0.2);

console.log('add = ', addd);
console.log('subtract = ', subt);
