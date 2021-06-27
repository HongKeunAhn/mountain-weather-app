import axios from 'axios';

const URL = `https://api.openweathermap.org/data/2.5/weather`;
const API_KEY = `e87da8b16317df6783c761f139767dde`;

export const findCityWeather = async (cityName) => {
  const { data } = await axios.get(URL, {
    params: {
      q: cityName,
      units: 'metric',
      APPID: API_KEY,
      lang: 'kr',
    },
  });

  return data;
};
