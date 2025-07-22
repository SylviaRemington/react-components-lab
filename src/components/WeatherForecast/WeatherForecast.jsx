import './WeatherForecast.css'

const WeatherForecast = (props) => {
    return (
        <div className="weather">
            <h2>{props.WeatherForecast.day}</h2>
            <img src="" alt="" />
            <p><span>conditions: </span>current weather conditions</p>
            <p><span>time: </span>time of day</p>
        </div>

    )
}

export default WeatherForecast;