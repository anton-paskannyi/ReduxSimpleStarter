import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/char';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temp = cityData.list.map(weather => weather.main.temp);
    const press = cityData.list.map(weather => weather.main.pressure);
    const hum = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={name}>
        <td>
          <GoogleMap lon={lon} lat={lat} />
        </td>
        <td>
          <Chart data={temp} color="orange" units="K" />
        </td>
        <td>
          <Chart data={press} color="green" units="hPa" />
        </td>
        <td>
          <Chart data={hum} color="blue" units="%" />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
            <tr>
              <th>City</th>
              <th>Tempreture (K)</th>
              <th>Pressuer (hPa)</th>
              <th>Humidity (%)</th>
            </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) { // state
  // const weather  = state.weather
  return { weather }; // { weather } === { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);
