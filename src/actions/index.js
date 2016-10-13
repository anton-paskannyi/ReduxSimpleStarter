import axios from 'axios';

const API_KEY = '24df8a197e39ac18f4c953d12c4c3840';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
    // Redux-promise sees it's a promise
    // resolves it, create new action and pass it to reducer
  };
}
