const location=3871336;
const api_key='88ec9b2df39a7beb813fbb04e2a58eec';
const url_base_weather='http://api.openweathermap.org/data/2.5/weather';
const units='metric'
export const api_weather = `${url_base_weather}?id=${location}&APPID=${api_key}&units=${units}`;