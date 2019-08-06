import React from 'react';
import "./Result.css"
export const Result = (props) => {

    const { imgs, date, city, sunrise, sunset, temp, pressure, wind, err, description, minTemp, maxTemp } = props.weather

    let content = <>
        <div className="result">
            <h1>{String(city)}{temp}</h1>
            {description === "Clear" ? <img src={imgs[0]} /> : null}
            {description === "Clouds" ? <img src={imgs[1]} /> : null}
            {description === "Rain" ? <img src={imgs[2]} /> : null}
            <br></br>
            {minTemp}{maxTemp} <br></br>
            {sunrise} <br></br> {sunset}<br></br>
            {pressure}

        </div>
    </>
    return (<div><br />
        {date}<br></br>
        {err || city === "" ? null : content}

    </div >);
}

