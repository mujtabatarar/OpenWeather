import React, { useState, useEffect, useContext, createContext} from "react";
import ShowWeatherData from "./showData";
import userContext from "./hookModule";
var isdataSubmitted = false;

const apiKey = "5f15b9438cb57451f2f761a0a0c6d0dd";


/**
 * This function component is used to show search box,
 * a submit button, an alert in case no data entered in input field.
 * And Mainly call api, and store data from api into hook.
 */
function GetData () {

        const [data, setData] = useState({});
        const [userLocation, setUserLocation] = useState("lahore");
        
        /**
         * Api call method, this method set weather data in a hook.
         */
        function callApi (){
                console.log("callApi");
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userLocation}&appid=${apiKey}` )
                .then(res => res.json())
                .then(result => {
                console.log(result);
                setData(result);
                isdataSubmitted=true;
                console.log(isdataSubmitted);
                }).catch(err=>{
                        console.log(err.message);
                });
        }

        /**
         * calls callApi function if user has allready added some location in search bar.
         */
        function callApiIfInputNotEmpty(){
                console.log("callApiIfInputNotEmpty");
                const location = document.getElementById("inputField").value;
                if(location == ""){
                        alert("Please enter your location!");
                }else{
                        setUserLocation(location);
                        callApi();
                }
        }

        /**
         * Return Input Field and summit button
         */
        return (
                <>
                        <div className="search-box">
                                <input  id="inputField" type="text/html" placeholder="please enter your city"/>
                                <button onClick={callApiIfInputNotEmpty}>submit</button>
                        </div>

                        {isdataSubmitted &&
                                <userContext.Provider value={data}>
                                        <ShowWeatherData weather={data}/>
                                </userContext.Provider>

                        }
                        

                </>
        );

}
export default GetData;
