import React, { useState } from 'react';

import { Card } from './component/card';
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
        {weather.main && <Card data={weather} />}
        {error === 400 && (
          <div class='weather-no-message'>
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
