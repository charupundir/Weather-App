import React, { useState, useEffect } from "react";
import {
  SearchBar,
  WeatherCard,
  Spinner,
  ErrorMessage,
} from "./components";

const API_KEY = "1d9464ba2cd23ee19916fccbd059a314";

function WeatherApp() {
  const [city, setCity] = useState("Delhi");       
  const [inputCity, setInputCity] = useState("Delhi"); 
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  
  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError("");
    setWeather(null);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
      );
      if (!res.ok) throw new Error(`Failed to fetch weather for "${cityName}"`);
      const data = await res.json();
      setWeather({
        name: data.name,
        temp: data.main.temp,
        condition: data.weather[0].description,
      });
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  
  const handleSearch = () => {
    if (inputCity.trim() !== "") {
      setCity(inputCity.trim());
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 bg-gray-100 p-6 rounded shadow">
      <SearchBar
        value={inputCity}
        onChange={setInputCity}
        onSearch={handleSearch}
      />
      {loading && <Spinner />}
      {error && <ErrorMessage message={error} />}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default WeatherApp;
