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

                       
                        {/* <nav className="navbar navbar-light bg-light">
                                <div className="container-fluid">
                                        <a className="navbar-brand">Open Weather API</a>
                                        <div className="d-flex">
                                                <input id="inputField" className="form-control me-2" type="text/html" placeholder="search"/>
                                                <button className="btn btn-outline-success" onClick={callApiIfInputNotEmpty}>searchh</button>
                                        </div>
                                </div>
                        </nav> */}

                        <div className="ui fluid action input">
                                <input id= "inputField"  type="text" placeholder="Search..."/>
                                <button className="ui button" onClick={callApiIfInputNotEmpty}>Search</button>
                        </div>

                       {/* <div>
                                <input id="inputField" className="form-control me-2" type="text/html" placeholder="search"/>
                                <button className="btn btn-outline-success" onClick={callApiIfInputNotEmpty}>searchh</button>
                </div> */}
                        
                        
                        {isdataSubmitted &&
                                <userContext.Provider value={data}>
                                        <ShowWeatherData weather={data}/>
                                </userContext.Provider>

                        }
                        

                </>
        );

}
export default GetData;
