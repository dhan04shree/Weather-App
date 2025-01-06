import { useState } from 'react';
import SearchBox from './SearchBox';
import InfoBox from './infoBox';

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo] = useState({
        city : "Weather",     
        feelsLike: 26.74,
        humidity: 85,
        temp: 25.88,
        tempMax: 25.88,
        tempMin: 25.88,
        weather: "overcast clouds",
    });
      let updateInfo = (newInfo)=>{
      setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}