
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';



let moment = require('moment');

const DayCard = ({ reading, degreeType }) => {
    let newDate = new Date();
    const weekday = reading.dt * 1000
    newDate.setTime(weekday)

    const imgURL = `owf owf-${reading.weather[0].icon} owf-5x`
    const fahrenheit = Math.round(reading.main.temp)
    const celsius = Math.round((fahrenheit - 32) * 5/9)
    

    return (
        <div className="col-sm-2">
            <div className="card ">
                <h5 className="card-title">{moment(newDate).format('dddd')}</h5>
                <p className="text-muted">{moment(newDate).format('MMMM Do')}</p>
                <i className={imgURL}></i>
                <h2>{degreeType === "celsius" ? celsius + "°C" : fahrenheit + "°F"}</h2>
                
                <div className="card-body">
                    <p className="card-text">{reading.weather[0].description}</p>
                </div>
            </div>
        </div>
    )
}

export default DayCard;
