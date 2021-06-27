import React, { useState } from 'react';
import { findCityWeather } from './api/fetchWeather';
import './App.css';

function App() {
  const [cityName, setCityName] = useState('');
  const [weather, setWeather] = useState({});

  const search = async (e) => {
    if (e.key === 'Enter') {
      const response = await findCityWeather(cityName);
      setWeather(response);
      setCityName('');
    }
  };

  return (
    <div className='container'>
      <main className='main'>
        <div className='search-input-wrap'>
          <input
            type='text'
            className='search-input'
            placeholder='Search...'
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            onKeyPress={search}
          />
        </div>
        {weather.main && (
          <div className='weather-card'>
            <h2 className='weather-city'>
              <span>{weather.name}</span>
              <sup>{weather.sys.country}</sup>
            </h2>
            <div className='weather-temperature'>
              <span>{Math.round(weather.main.temp)}</span>
              <sup>&deg;C</sup>
            </div>
            <div className='weather-viewer'>
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                className='weather-icon'
                alt={weather.weather[0].main}
              />
              <p>{weather.weather[0].description}</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
