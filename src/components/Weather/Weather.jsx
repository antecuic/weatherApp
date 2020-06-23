import React, {useState, useRef, useEffect} from 'react';
import axios from 'axios';
import WeatherContent from '../WeatherContent/WeatherContent';
import styles from './Weather.module.css';

const Weather = () => {

    const inputRef = useRef();
    const [enteredFilter, setEnteredFilter] = useState();
    const [weatherData, setWeatherData] = useState();

    const startSearch = (enteredFilter) => {
            
        const api = `https://api.openweathermap.org/data/2.5/weather?q=${enteredFilter}&appid=0bd7716c3eccfb08c899f817ff10ae88&units=metric`;
        axios.get(api)
            .then(response => setWeatherData(response.data))
            .catch(error => alert('No available data :('))
    }

    return (
        <React.Fragment> 
            <div className={styles.Header}>
                <input 
                className={styles.Searchbar}
                ref={inputRef}
                type="text"
                value={enteredFilter || ''}
                onChange={event => setEnteredFilter(event.target.value)}
                placeholder = {'Search...'}
                />
                <button className={styles.SearchButton} onClick={() => startSearch(enteredFilter)}>Search</button>
            </div>
            {weatherData && <WeatherContent data={weatherData}/>}
        </React.Fragment>
    ) 
}

export default Weather;