import './WeatherForecast.css'

const WeatherForecast = (props) => {
    return (
        <div className="weather">
            <h2>Day of the Week: {props.day}</h2>
            <img src={props.img} alt={props.imgAlt} />
            <p><span>conditions:</span>{props.conditions}</p>
            <p><span>time: </span>{props.time}</p>
        </div>

    )
}

export default WeatherForecast;