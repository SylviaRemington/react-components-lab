import './WeatherForecast.css'

const WeatherForecast = (props) => {
    return (
        <div className="weather">
            {/* I added 'Day of the Week:' verbiage just for something different. */}
            <h2>Day of the Week: {props.weatherForecast.day}</h2>
            <img src={props.weatherForecast.img} alt={props.weatherForecast.imgAlt} />
            <p><span>conditions: </span>{props.weatherForecast.conditions}</p>
            <p><span>time: </span>{props.weatherForecast.time}</p>
        </div>

    )
}

export default WeatherForecast;
