import React,{Component} from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem'
import getUrlForecastByCity from './../services/getUrlForecastByCity'
import getForecast from './../services/getForecast'
import './styles.css';

class ForecastExtended extends Component {

  constructor() {
    super();
    this.state = { forecastData: null }
  }

  componentDidMount() {
    const api_forecast = getUrlForecastByCity(this.props.city);
    fetch(api_forecast).then(
      data => (data.json())
    ).then(
      weather_data => {
        const forecastData = getForecast(weather_data);
        console.log(forecastData)
        this.setState({ forecastData });
      }
    );
  }

  renderForecastItemDays(){
    return <h1>render items</h1>;
    // return days.map( day => (<ForecastItem weekDay={day} hour={10} data={data}></ForecastItem>))
  }
  renderProgress = () => {
    return <h3>Cargando Pronostico Extendido...</h3>;
  }
  render (){
    const {city} = this.props;
    const { forecastData } = this.state;
    return (
      <div>
        <h2 className='forecast-title'>Pronóstico Extendido para {city}</h2>
        { forecastData ?
          this.renderForecastItemDays() :
          this.renderProgress() }
      </div>
    );
  };
};

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
}

export default ForecastExtended;