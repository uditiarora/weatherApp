import React from 'react';

const ForecastTile = props => {
    return(
        <div>
            <p> Max {Math.trunc(props.max)} celsius</p>
            <p> Min {Math.trunc(props.min)} celcius</p>
            <img src={props.main}/>
            <p>{String(props.date).replace(/-/g, ".")}</p>
        </div>
    )
};
export default ForecastTile;