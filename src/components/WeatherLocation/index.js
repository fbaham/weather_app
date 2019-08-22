import React, { Component } from 'react';
import Location from './Location';
import PropTypes from 'prop-types';
import WeatherData from './WeatherData';
import getWeather from './../../services/getWeather'
import { api_weather } from './../../constants/api_urls'
import CircularProgress from '@material-ui/core/CircularProgress'
import './styles.css';

class WeatherLocation extends Component {
    constructor(){
        super();
        this.state={
            city: 'Santiago',
            data: null
        }
    }
    componentDidMount() {
        this.handleUpdateClick();
    }
    
    componentDidUpdate(prevProps, prevState){
        console.log('componentDidUpdate');
        // this.handleUpdateClick();
    }

    handleUpdateClick = () => {
        fetch(api_weather).then(resolve => {
            return resolve.json();
        }).then(data=>{
            const newWeather = getWeather(data);
            console.log('handleUpdateClick');
            this.setState({
                data: newWeather
            })
        });
    };

    render(){
        const { city, data } = this.state
        return(
            <div className='weatherLocationCont'>
                <Location city={city}></Location>
                {data ? <WeatherData data={data}></WeatherData> :
                <CircularProgress size={50}/>}
            </div>
        );
    };
};

WeatherLocation.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),   
}
export default WeatherLocation;