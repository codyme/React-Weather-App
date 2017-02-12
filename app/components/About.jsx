var React = require('react');

var About = (props) => {
  return (
    <div>
      <h3>About</h3>
      <p>This is a simple React single page application which I made during my React-Redux course with ZeoLearn.</p>
      <p><a href="https://openweathermap.org/">OpenWeatherMap.org</a> API is used to display temprature of the searched city.</p>
    </div>
  )
};

module.exports = About;
