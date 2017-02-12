var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <h3>It's it {temp} &#x2103; in {location}.</h3>
  )
};

module.exports = WeatherMessage;
