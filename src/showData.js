import React, {useState, useEffect, useContext, createContext} from "react";
import GetData from './fetchData';
import userContext from "./hookModule";
import DateAndTimeByMujtaba from "./timeAndDate";


/**
 * This Component show weather data it get via useContext hook.
 */
function ShowWeatherData(){
        const weather =  useContext(userContext);
        console.log(" showWeatherData. comment");
        console.log(weather);

        /**
         * convert fahrenheit to celsius 
         */
        function kToC(){
                var fTemp = weather.main.temp;
                fTemp = fTemp - 273.25;
                fTemp = Math.round(fTemp);
                return fTemp;
        }
         function date(){
                 const d = new Date();

         }

        return(
        <>    
                <div className="location-time-info">
                        <text className="location-class">{weather.name} , {weather.sys.country}</text> <br/>
                        <DateAndTimeByMujtaba/>
                        
                </div>  
                <div className="weather-box">
                        <text className='temperature'> Temperature: {kToC()}c</text><br/>
                        <text className='pressure-details'> Pressure: {weather.main.pressure} hpa</text><br/>
                        <text classname='temp-clouds'>discription: {weather.weather[0].description}</text><br/>
                        <text classname='humidity' >humidity: {weather.main.humidity}</text> <br/>
                </div>  
        </>     
        );
}

export default ShowWeatherData;