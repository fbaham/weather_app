import { url_base_weather, api_key, units } from '../constants/api_urls';

const getUrlWeatherByCity = city => {
    return `${url_base_weather}?q=${city}&APPID=${api_key}&units=${units}`;
} 

export default getUrlWeatherByCity;