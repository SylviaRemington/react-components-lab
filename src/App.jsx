import './App.css';
import WeatherForecast from './components/WeatherForecast/WeatherForecast.jsx';

const App = () => {
  // function App {
  const weatherForecasts = [
    {
      day: 'Mon',
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/day.svg',
      imgAlt: 'sun icon',
      conditions: 'sunny',
      time: 'Morning',
    },
    {
      day: 'Tue',
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/night.svg',
      imgAlt: 'moon icon',
      conditions: 'clear',
      time: 'Night',
    },
    {
      day: 'Wed',
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/stormy.svg',
      imgAlt: 'clouds with lightning icon',
      conditions: 'stormy',
      time: 'All Day',
    },
    {
      day: 'Thu',
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-day.svg',
      imgAlt: 'sun overcast by clouds icon',
      conditions: 'overcast',
      time: 'Evening',
    },
    {
      day: 'Fri',
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-night.svg',
      imgAlt: 'moon overcast by clouds icon',
      conditions: 'cloudy',
      time: 'Night',
    },
  ];

  return (
    <>
      <h1>Local Weather</h1>
      <section>

        {/* One Version of the map array method:
        {weatherForecasts.map((weatherForecast, index) => (
          <WeatherForecast
            key={index}
            day={weatherForecast.day}
            img={weatherForecast.img}
            imgAlt={weatherForecast.imgAlt}
            conditions={weatherForecast.conditions}
            time={weatherForecast.time}
          /> */}

        {/* Second Version below of the map array method that is more dynamic & future-proofs it. */}
        {
          weatherForecasts.map((weatherForecast, index) => (
            <WeatherForecast
              key={index}
              weatherForecast={weatherForecast}
            />

          ))
        };
        {/* <WeatherForecast day='Mon' time='Night' conditions='stormy' imgAlt='sun icon' img='https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/day.svg'
       /> */}
      </section>
    </>


  );
};

export default App;



