import React from 'react';
import WeatherLocation from './WeatherLocation';

const WeatherLocationList = () => (
    <div className="App">
        <WeatherLocation city='Santiago,cl'></WeatherLocation>
        <WeatherLocation city='Buenos Aires,ar'></WeatherLocation>
        <WeatherLocation city='Bogotá,col'></WeatherLocation>
        <WeatherLocation city='Tijuana,mx'></WeatherLocation>
    </div>
);

export default WeatherLocationList;