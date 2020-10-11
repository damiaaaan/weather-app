import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast';
import './styles.css';

/*
const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo'
];
const data = {
    temperature: 12,
    humidity: 49,
    weatherState: 'normal',
    wind: '20 m/s'
};
*/
const api_key = "4615a56fbf1c34db78462b6b890388b1";
const url = "http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component {

    constructor() {
        super();
        this.state = { forecastData: null }
    }

    componentDidMount() {
        this.updateCity(this.props.city)
    }

    // TODO: Fumcion depreacada
    componentWillReceiveProps(nextProps) {
        if (nextProps.city !== this.props.city ) {
            this.setState({forecastData: null}); // Para que aparezca el indicador de carga
            this.updateCity(nextProps.city);
        }
    }

    updateCity = city => {
        const url_forecast = `${url}?q=${city}&appid=${api_key}`;
        
        // Genera una promise, axios es una alternativa que es mas compatibles con browsers viejos
        fetch(url_forecast).then(
            // Se ejecuta cuando termina de ejecutarse fetch
            data => ((data).json())
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);
                this.setState({ forecastData }); 
            }   
        );
    }

    renderForecastItemDays(forecastData) {
        return forecastData.map( forecast => (
            <ForecastItem 
                key={`${forecast.weekDay}${forecast.hour}`}
                weekDay={forecast.weekDay}
                hour={forecast.hour} 
                data={forecast.data}>
            </ForecastItem>));
    }

    renderProgress = () => {
        return <h3>Cargando pronostico extendido...</h3>;
    }

    render() {
        const { city } = this.props;
        const { forecastData } = this.state;

        return (
            <div>
                <h2 className='forecast-title'>Pronostico extendido para {city}</h2>
                {forecastData ? 
                this.renderForecastItemDays(forecastData) :
                this.renderProgress()
                }
            </div>);
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;


