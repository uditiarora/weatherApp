import React from 'react';
import ForecastTile from './ForecastTile';
import 'bootstrap/dist/css/bootstrap.css';


const Forecast = props => {
    return(
        <div class = "row">
            <ForecastTile 
            main = {props.data1.main}
            max = {props.data1.max}
            min = {props.data1.min}
            date = {props.data1.date}
            />
            <ForecastTile 
            main = {props.data2.main}
            max = {props.data2.max}
            min = {props.data2.min}
            date = {props.data2.date}
            />
            <ForecastTile 
            main = {props.data3.main}
            max = {props.data3.max}
            min = {props.data3.min}
            date = {props.data3.date}
            />
            <ForecastTile 
            main = {props.data4.main}
            max = {props.data4.max}
            min = {props.data4.min}
            date = {props.data4.date}
            />
            <ForecastTile 
            main = {props.data5.main}
            max = {props.data5.max}
            min = {props.data5.min}
            date = {props.data5.date}
            />
            <ForecastTile 
            main = {props.data6.main}
            max = {props.data6.max}
            min = {props.data6.min}
            date = {props.data6.date}
            />
        </div>
    );
}
export default Forecast;