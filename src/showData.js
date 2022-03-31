import React, {useState, useEffect, useContext, createContext} from "react";
import GetData from './fetchData';
import userContext from "./fetchData"
const userNewContext = createContext(userContext);


/**
 * This Component show weather data it get via useContext hook.
 */
function ShowWeatherData(){
const weather =  useContext(userNewContext);
console.log(" showWeatherData. comment");
console.log(weather);
        return(
        <>      
                <div className="weather-box">
                        
                        <text className='temperature'> c</text><br/>
                        <text className='temp-details'>p</text><br/>
                        <text classname='temp-clouds'>j</text><br/>
                        <text classname='humidity' >p</text> <br/>
                </div>  
        </>     
        );
}

export default ShowWeatherData;