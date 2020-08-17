import convert from 'convert-units';
import {
    SUN,
    CLOUDY,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE,
} from './../constants/weathers';


const getTemp = kelvin => {
    return Number(convert(kelvin).from("K").to("C").toFixed(2));
}

const getWeatherState = weather => {
    // console.log(weather_data.weather[0].main)
    const { id } = weather;
    
    if (id < 300) {
        return THUNDER;
    } else if (id < 400) {
        return DRIZZLE;
    } else if (id < 600) {
        return RAIN;
    } else if (id < 700) {
        return SNOW;
    } else if (id === 8000) {
        return SUN;
    } else {
        return CLOUDY;
    }
}
 
const transformWeather = weather_data => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = getWeatherState(weather_data.weather[0]); // id del icono
    const temperature = getTemp(temp);

    const data = {
        humidity,
        temperature,
        weatherState,
        wind: `${speed} m/s`
    }
    return data;
}

export default transformWeather;