import React from 'react';

const CurrentWeather = props => {
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date();
    const day = dayNames[date.getDay()];
    const hour = date.getHours();
    const minute = date.getMinutes();

    return(
        <div class = "text-center">
            <p>{props.city}</p>
            <p>{day} {hour}:{minute}</p>
            <img src = {props.main} alt = "icon"></img>
            <p>{Math.round(props.temp)} celsius</p>
            <p>Feels like {Math.round(props.feel)}</p>
        </div>
    );
};
export default CurrentWeather;