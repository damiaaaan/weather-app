import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
    FOG,
} from './../../constants/weathers';
import './styles.css';
const icons = {
    [CLOUD] : "cloud",
    [CLOUDY] : "cloudy",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [WINDY]: "windy",
    [FOG]: "fog",
}

const getWeatherIcon = (weatherState) => {
    const icon = icons[weatherState];
    const sizeicon = "4x";
    if(icon)
        return <WeatherIcons className="wicon" name={icon} size={sizeicon} />;
    else
        return<WeatherIcons className="wicon" name={"day-sunny"} size={sizeicon} />
};

const WeatherTeperature = ({ temperature, weatherState }) => (
    <div className="weatherTemperatureCont">
        {
            getWeatherIcon(weatherState)
        }        
        <span className="temperature">{ `${temperature}` }</span>
        <span className="temperatureType">{ 'Cº' }</span>
    </div>
);

WeatherTeperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTeperature;