import React, {Component} from 'react';
import {connect} from 'react-redux';

class WeatherList extends Component {
  renderWeather(cityData){
    const city = cityData.city.name;
    return(
      <tr key={city}>
        <td>{city}</td>
      </tr>
    )
  }

  render(){
    return(
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

// refactored below to use ES6
// function mapStateToProps(state){
//   return {weather: state.weather};
// }

function mapStateToProps({weather}){
  return {weather};  // {weather} === {weather: weather}
}

export default connect(mapStateToProps)(WeatherList);
