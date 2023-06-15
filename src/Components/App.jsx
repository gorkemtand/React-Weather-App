import React, { useState } from "react";
import SearchBar from "./SearchBar";
import WeatherCard from "./WeatherCard";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_ENDPOINT = "https://api.openweathermap.org/data/2.5/weather";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeatherData = async (city) => {
    try {
      const response = await fetch(
        `${API_ENDPOINT}?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (response.ok) {
        const data = await response.json();
        setWeatherData(data);
        setError(null);
      } else {
        setError("Unable to fetch weather data");
        setWeatherData(null);
      }
    } catch (error) {
      setError("An error occurred");
      setWeatherData(null);
    }
  };

  const handleSearch = (city) => {
    fetchWeatherData(city);
  };

  return (
    <div className="App">
      <SearchBar className="search" onSearch={handleSearch} />

      {error && (
        <div className="error">
          <img src="images/not-found.png" alt="" />
        </div>
      )}

      {weatherData && (
        <WeatherCard
          city={weatherData.name}
          temperature={Math.round(weatherData.main.temp)}
          description={weatherData.weather[0].main}
          wind={weatherData.wind.speed}
          humidity={weatherData.main.humidity}
        />
      )}
    </div>
  );
};

export default App;
