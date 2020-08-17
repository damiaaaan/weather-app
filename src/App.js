import React from 'react';
import './App.css';
import LocationList from './components/WeatherLocation/LocationList';

const cities = [
  'Buenos Aires,ar',
  'Cambridge,gb',
  'London,gb',
  'Asuncion,py'
]


function App() {

  const handleLocationSelection = city => {
    console.log(city)
  };

  return (
    <div className="App">
      <LocationList cities={cities} 
      onSelectedLocation={handleLocationSelection} ></LocationList>
    </div>
  );
}

export default App;
