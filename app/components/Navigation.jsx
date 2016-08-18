var React = require('react');
var {Link, IndexLink} = require('react-router');


var Navigation = React.createClass({

  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Todo List App</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Todo List</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">
              Created by <a href="http://www.kuerbis.ca" target="_blank">Ralph Kuerbis</a>
            </li>

          </ul>
        </div>
      </div>
    );
  }
});


module.exports = Navigation;
