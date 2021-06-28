import React from 'react';
import './Card.css';

function Card({ data }) {
  const { main, wind, weather } = data;

  return (
    <div className='weather-card'>
      <div className='weather-title'>
        <h5>현재 날씨</h5>
        <p>{weather[0]?.description}</p>
      </div>
      <div className='weather-viewer'>
        <img
          src={`https://openweathermap.org/img/wn/${weather[0]?.icon}@2x.png`}
          className='weather-icon'
          alt={weather[0]?.main}
        />
      </div>
      <ul className='weather-information'>
        <li className='info-list'>
          <div className='info-title'>온도</div>
          <div className='info-text'>
            <span>{Math.round(main?.temp)}</span>
            <sup>&deg;C</sup>
          </div>
        </li>
        <li className='info-list'>
          <div className='info-title'>습도</div>
          <div className='info-text'>
            <span>{Math.round(main?.humidity)}</span>
            <sup>%</sup>
          </div>
        </li>
        <li className='info-list'>
          <div className='info-title'>대기압</div>
          <div className='info-text'>
            <span>{Math.round(main?.pressure)}</span>
            <sup>hPa</sup>
          </div>
        </li>
        <li className='info-list'>
          <div className='info-title'>풍속</div>
          <div className='info-text'>
            <span>{Math.round(wind?.speed)}</span>
            <sup>m/s</sup>
          </div>
        </li>
        <li className='info-list'>
          <div className='info-title'>풍향</div>
          <div className='info-text'>
            <span>{Math.round(wind?.deg)}</span>
            <sup>&deg;</sup>
          </div>
        </li>
      </ul>
    </div>
  );
}

Card.defaultProps = {
  main: {},
  wind: {},
  weather: [],
};

export default Card;
