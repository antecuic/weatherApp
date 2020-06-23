import React, {useEffect} from 'react';
import '../../assets/css/owfont-regular.css';
import styles from './WeatherContent.module.css';


const WeatherContent = props => {

    const {data} = props;

    let content = null;
    data ? 
        content = (
            <div className={styles.WeatherContainer}>
                <div className={styles.WeatherData}>
                    <h2>{data.name}, {data['sys'].country}</h2>
                    <i className={`owf owf-${data['weather'][0].id}`}></i>
                    <div className={styles.WeatherDescription}>
                        <h3>{data['weather'][0].description}</h3>
                        <h3>{Math.round(data['main'].temp)}°</h3>
                    </div>
                </div>
            </div>
        ) 
        : 
        content = <h2>Search for weather</h2>;

    return(
        <React.Fragment>
            {content}
        </React.Fragment>
        );

}

export default WeatherContent;