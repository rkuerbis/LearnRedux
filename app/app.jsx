var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var TodoApp = require('TodoApp');
var About = require('About');


// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')
//
// ReactDOM.render(
//   <p>Boilerplate 3 Project</p>,
//   document.getElementById('app')
// );


require('./redux-example.jsx');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <IndexRoute component={TodoApp}/>
    </Route>
  </Router>,
  document.getElementById('app')
);




// require('./redux-todo-example.jsx');
