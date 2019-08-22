const getWeatherState = weather_data => {
    return 'rain';
}

const getWeather = weather_data => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = getWeatherState(weather_data);

    const data = {
        humidity,
        temperature: temp,
        weatherState,
        wind: speed
    }
    return data;
}

export default getWeather;