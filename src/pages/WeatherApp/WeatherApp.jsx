import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import {
  SearchBar,
  WeatherCard,
  Spinner,
  ErrorMessage,
} from "./components";

const API_KEY = "1d9464ba2cd23ee19916fccbd059a314";
=======
import { DEFAULT_CITY } from "../../config";
import { fetchWeather } from "../../utils/api";
import SearchBar from "../../components/SearchBar";
import WeatherCard from "../../components/WeatherCard";
import Spinner from "../../components/Spinner";
import ErrorMessage from "../../components/ErrorMessage";
>>>>>>> 6c6d3563af931f918e7bba10f4b4ffc33bf4fc8c

function WeatherApp() {
  const [city, setCity] = useState("Delhi");       
  const [inputCity, setInputCity] = useState("Delhi"); 
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

<<<<<<< HEAD
  
  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  const fetchWeather = async (cityName) => {
=======
  // Weather fetch function
  const getWeather = async (selectedCity) => {
>>>>>>> 6c6d3563af931f918e7bba10f4b4ffc33bf4fc8c
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

<<<<<<< HEAD
  
=======
  // useEffect for fetching data & auto-refresh
  useEffect(() => {
    getWeather(city);

    let intervalId; 

    if (autoRefresh) {
      intervalId = setInterval(() => getWeather(city), 10000);
    }

    // cleanup
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [city, autoRefresh]);

  // Search button event
>>>>>>> 6c6d3563af931f918e7bba10f4b4ffc33bf4fc8c
  const handleSearch = () => {
    if (inputCity.trim() !== "") {
      setCity(inputCity.trim());
    }
  };

  return (
<<<<<<< HEAD
    <div className="max-w-md mx-auto mt-8 bg-gray-100 p-6 rounded shadow">
      <SearchBar
        value={inputCity}
        onChange={setInputCity}
        onSearch={handleSearch}
      />
      {loading && <Spinner />}
      {error && <ErrorMessage message={error} />}
      {weather && <WeatherCard weather={weather} />}
=======
    <div className="max-w-md mx-auto mt-6 p-4 bg-gray-100 rounded shadow">
      <h1 className="text-3xl font-bold text-center mb-4">Weather Tracker</h1>

      <SearchBar search={search} setSearch={setSearch} onSearch={handleSearch} />

      {loading && <Spinner />}
      {error && <ErrorMessage message={error} />}
      {weather && <WeatherCard weather={weather} lastUpdated={lastUpdated} />}

      <div className="flex justify-center gap-3 mt-4">
        {autoRefresh ? (
          <button
            onClick={() => setAutoRefresh(false)}
            className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-white"
          >
            Stop Auto-Refresh
          </button>
        ) : (
          <button
            onClick={() => setAutoRefresh(true)}
            className="bg-green-500 hover:bg-green-600 px-3 py-1 rounded text-white"
          >
            Resume Auto-Refresh
          </button>
        )}
      </div>
>>>>>>> 6c6d3563af931f918e7bba10f4b4ffc33bf4fc8c
    </div>
  );
}

export default WeatherApp;

