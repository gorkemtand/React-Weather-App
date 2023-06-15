import React from "react";

const weatherIcons = {
  Clear: "images/clear.png",
  Clouds: "images/clouds.png",
  Drizzle: "images/drizzle.png",
  Mist: "images/mist.png",
  Rain: "images/rain.png",
  Snow: "images/snow.png",
  Thunderstorm: "images/thunder.png",
  Haze: "images/mist.png",
  Smoke: "images/mist.png",
  Fog: "images/mist.png",
  Tornado: "images/tornado.png",
  Squall: "images/tornado.png"
};

const preloadedImages = Object.values(weatherIcons).map((imageSrc) => {
  const image = new Image();
  image.src = imageSrc;
  return image;
});

const WeatherCard = ({ city, temperature, description, wind, humidity }) => {
  const weatherIcon = weatherIcons[description] || null;

  return (
    <div className="weather-card">
      <img src={weatherIcon} className="weatherIcon" alt="weatherIcon" />
      <h1>{temperature}°C</h1>
      <h2>{city}</h2>
      <div className="details">
        <div className="col">
          <img src="images/humidity.png" alt="humidityImage" />
          <div>
            <p className="humidity">{humidity}%</p>
            <p>Humidity</p>
          </div>
        </div>
        <div className="col">
          <img src="images/wind.png" alt="windImage" />
          <div>
            <p className="wind">{wind} km/h</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
