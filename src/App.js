import React, { useState } from 'react';

import { mountainList } from './constants/mountainList';
import { findMountainWeather } from './api/fetchWeather';
import './App.css';

function App() {
  const [mountainName, setMountainName] = useState('');
  const [weather, setWeather] = useState({});
  const [error, setError] = useState();

  const search = async (e, name) => {
    if (e.key === 'Enter') {
      const { data, status } = await findMountainWeather(mountainList[mountainName]);

      setWeather(data);
      setError(status);
    }
  };

  return (
    <div className='container'>
      <main className='main'>
        <div className='search-input-wrap'>
          <input
            type='text'
            className='search-input'
            placeholder='산 이름만 검색해줘요'
            value={mountainName}
            onChange={(e) => setMountainName(e.target.value)}
            onKeyPress={search}
          />
        </div>
        {weather.main && (
          <div className='weather-card'>
            <div className='weather-title'>
              <h5>현재 날씨</h5>
              <p>{weather?.weather[0]?.description}</p>
            </div>
            <div className='weather-viewer'>
              <img
                src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`}
                className='weather-icon'
                alt={weather?.weather[0]?.main}
              />
            </div>
            <ul className='weather-information'>
              <li className='info-list'>
                <div className='info-title'>온도</div>
                <div className='info-text'>
                  <span>{Math.round(weather?.main?.temp)}</span>
                  <sup>&deg;C</sup>
                </div>
              </li>
              <li className='info-list'>
                <div className='info-title'>습도</div>
                <div className='info-text'>
                  <span>{Math.round(weather?.main?.humidity)}</span>
                  <sup>%</sup>
                </div>
              </li>
              <li className='info-list'>
                <div className='info-title'>대기압</div>
                <div className='info-text'>
                  <span>{Math.round(weather?.main?.pressure)}</span>
                  <sup>hPa</sup>
                </div>
              </li>
              <li className='info-list'>
                <div className='info-title'>풍속</div>
                <div className='info-text'>
                  <span>{Math.round(weather?.wind?.speed)}</span>
                  <sup>m/s</sup>
                </div>
              </li>
              <li className='info-list'>
                <div className='info-title'>풍향</div>
                <div className='info-text'>
                  <span>{Math.round(weather?.wind?.deg)}</span>
                  <sup>&deg;</sup>
                </div>
              </li>
            </ul>
          </div>
        )}
        {error === 400 && (
          <div className='weather-card'>
            <div className='weather-temperature'>
              <span>없는 산이야!</span>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
