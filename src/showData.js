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
        function isLowMidHigh(){
                var tempSpec = "";
                if(kToC() <= 25){
                        return "low temp";
                }else if( kToC() < 32 && kToC() > 25){
                        return "mid temp";
                }else {
                        return "high temp";
                }
        }
         

        return(
        <>    
          

               {/* <Segment>
                <Label ribbon color="blue" size="large">Support</Label>
                <Segment basic textAlign={"center"}>
                        <Button style={{textAlign: "center"}}>contact us</Button>
                </Segment>
                 </Segment>*/}
                
                <div className="ui center aligned container">
                        <h1></h1>
                        <text className="location-clannnss" textAlign={"center"}>{weather.name} , {weather.sys.country}</text> <br/>
                        <DateAndTimeByMujtaba/>
                </div>

                <div className="ui right aligned container">
                        <div className="ui center aligned circular segment">
                                <h2 className="ui header">

                                                Temperature
                                                <div className="sub header">
                                                        <div class="ui statistics">
                                                                {isLowMidHigh() == "low temp" &&
                                                                        <div class="blue statistic"> 
                                                                                <div class="value">
                                                                                        {kToC()} c
                                                                                </div>      
                                                                                <i class="sun outline icon"></i>
                                                                                
                                                                        </div>
                                                                }
                                                                 { isLowMidHigh() == "mid temp" &&
                                                                        <div class="green statistic"> 
                                                                                <div class="value">
                                                                                        {kToC()} c
                                                                                </div>      
                                                                                <i class="sun outline icon"></i>
                                                                                
                                                                        </div>
                                                                }
                                                                 { isLowMidHigh() == "high temp" &&
                                                                        <div class="red statistic"> 
                                                                                <div class="value">
                                                                                        {kToC()} c
                                                                                </div>      
                                                                                <i class="sun outline icon"></i>
                                                                                
                                                                        </div>
                                                                }

                                                        </div>
                                                </div>
                                </h2>
                        </div>
                </div>

                {/*
                
                                <div className="ui circular segment">

                
                
                <div class="ui inverted circular segment">
                        <h2 class="ui inverted header">
                                Buy Now
                                <div class="sub header">$10.99</div>
                        </h2>
                </div>
                
                 <div style={{ height: "70px", width:"200px" , padding:"15px" }} className="container">
                                <text className="location-clannnss" textAlign={"center"}>{weather.name} , {weather.sys.country}</text> <br/>
                                <DateAndTimeByMujtaba/>  
                        </div>
                

                
                
                
                
                */}

                
                <div className="ui raised very padded text container segment">
                                <div className="ui center aligned container">
                                        <text> Pressure: {weather.main.pressure} hpa</text><br/>
                                        <text>discription: {weather.weather[0].description}</text><br/>
                                        <text>humidity: {weather.main.humidity}</text> <br/>
                                </div> 
                </div> 

              
        </>     
        );
}

export default ShowWeatherData;