import React from 'react';
import ReactDOM from 'react-dom';
import GetData from './fetchData';
import ShowWeatherData from "./showData"
import "./index.css";


ReactDOM.render(
  <React.StrictMode>
    <GetData/>
  </React.StrictMode>,
  document.getElementById('root')
);

