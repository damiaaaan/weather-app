const api_key = "4615a56fbf1c34db78462b6b890388b1";
const url_base_weather = "https://api.openweathermap.org/data/2.5/weather";
const location = "Buenos Aires,ar";

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;