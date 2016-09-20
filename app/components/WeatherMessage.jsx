var React = require('react');


var WeatherMessage = ({temp,location}) =>{
  return(
    <div>
      <h1 className="text-center">It is {temp} in {location}!</h1>
    </div>
  );
}

module.exports = WeatherMessage;
