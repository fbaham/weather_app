import getUrlForecastByCity from './../services/getUrlForecastByCity'
import transformForecast from './../services/transformForecast'

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA'

const setCity = value => ({type: SET_CITY, value});
const setForecastData = payload => ({type: SET_FORECAST_DATA, payload});

export const setSelectedCity = payload => {
  return dispatch => {
    const api_forecast = getUrlForecastByCity(payload);

    // activar en el estado un indicador de busqueda de datos
    dispatch(setCity(payload))

    return fetch(api_forecast).then(
      data => (data.json())
    ).then(
      weather_data => {
        const forecastData = transformForecast(weather_data);
        console.log(forecastData)

        // modificar el estado con el resultado de la promise (fetch)
        dispatch(setForecastData({city: payload, forecastData}))
      }
    );
  };
};