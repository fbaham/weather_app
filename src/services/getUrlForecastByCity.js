import PropTypes from 'prop-types';
import { url_base_forecast, api_key, units } from '../constants/api_urls';

const getUrlForecastByCity = city => {
  return `${url_base_forecast}?q=${city}&APPID=${api_key}&units=${units}`;
}

getUrlForecastByCity.propTypes = {
  city: PropTypes.string.isRequired,
}

export default getUrlForecastByCity;