var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function () {
    return (
        <div>
          <form onSubmit={this.onFormSubmit} className="form-inline">
            <div className="input-group">
              <input type="text" ref="location" placeholder="Enter your city" className="form-control" />
              <span className="input-group-btn">
                <button type="button" className="btn btn-primary">Search</button>
              </span>
            </div>
          </form>
        </div>
    );
  }
});

module.exports = WeatherForm;
