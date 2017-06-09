import axios from 'axios';

const API_key='67b7d0c5dba01d39ce0ef2882698d6ca';
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_key}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},uk`;
    const request = axios.get(url);
              
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}