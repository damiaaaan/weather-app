import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './Location';
import WeatherData from './../WeatherData';
import { PropTypes } from 'prop-types';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';
import './styles.css';
import transformWeather from './../../services/transformWeather';


class WeatherLocation extends Component {
    constructor(props) {
        super(props);
        const { city } = props;

        this.state = {
            city,
            data: null,
        };
        console.log("constructor")
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate")
    }
    

    handleUpdateClick = () => {
        const api_weather = getUrlWeatherByCity(this.state.city);
        fetch(api_weather).then( resolve => {
            return resolve.json();
        }).then( data => {
            const newWeather = transformWeather(data);
            console.log(newWeather);
            this.setState({
                data: newWeather
            })
        });
    }

    render() {
        console.log("render")
        const {onWeatherLocationClick} = this.props; 
        const {city, data} = this.state;
        return(
            <div className="weatherLocationCont" onClick={onWeatherLocationClick} >
                <Location city={city}></Location>
                {data ? 
                    <WeatherData data={data}></WeatherData> :
                    <CircularProgress size={50}/>
                }
            </div>
        );
    }
}

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation;