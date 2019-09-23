import React, { Component } from 'react';
import Location from './Location';
import { PropTypes } from 'prop-types';
import WeatherData from './WeatherData';
import transformWeather from '../../services/transformWeather'
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity'
import CircularProgress from '@material-ui/core/CircularProgress'
import './styles.css';

class WeatherLocation extends Component {
  constructor(props) {
    super(props);
    const { city } = props

    this.state = {
      city,
      data: null,
    }
  }
  componentDidMount() {
    this.handleUpdateClick();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
    // this.handleUpdateClick();
  }

  handleUpdateClick = () => {
    const api_weather = getUrlWeatherByCity(this.state.city)
    fetch(api_weather).then(resolve => {
      return resolve.json();
    }).then(data => {
      const newWeather = transformWeather(data);
      console.log('handleUpdateClick');
      this.setState({
        data: newWeather
      })
    });
  };

  render() {
    const { onWeatherLocationClick } = this.props;
    const { city, data } = this.state
    return (
      <div className='weatherLocationCont' onClick={onWeatherLocationClick}>
        <Location city={city}></Location>
        {data ? <WeatherData data={data}></WeatherData> :
          <CircularProgress size={60} thickness={7} />}
      </div>
    );
  };
};

WeatherLocation.propTypes = {
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired,
  }),
  city: PropTypes.string.isRequired,
  onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation;