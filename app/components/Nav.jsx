var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function () {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <ul className="nav navbar-nav">
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{color: '#3e90ca', fontWeight: 'bold'}}>Check Weather</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active"  activeStyle={{color: '#3e90ca', fontWeight: 'bold'}}>About</Link>
            </li>
            <li>
              <Link to="/contact" activeClassName="active" activeStyle={{color: '#3e90ca', fontWeight: 'bold'}}>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
});

module.exports = Nav;
