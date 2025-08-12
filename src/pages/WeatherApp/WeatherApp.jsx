import React, { useState, useEffect, useRef } from "react";
import { DEFAULT_CITY } from "../../config";
import { fetchWeather } from "../../utils/api";
import SearchBar from "../../components/SearchBar";
import WeatherCard from "../../components/WeatherCard";
import Spinner from "../../components/Spinner";
import ErrorMessage from "../../components/ErrorMessage";

function WeatherApp() {
  const [city, setCity] = useState(DEFAULT_CITY);
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [lastUpdated, setLastUpdated] = useState(null);
  const [autoRefresh, setAutoRefresh] = useState(true);

  const intervalRef = useRef();

  const getWeather = async (selectedCity) => {
    setLoading(true);
    setError("");
    try {
      const data = await fetchWeather(selectedCity);
      setWeather({
        name: data.name,
        temp: data.main.temp,
        condition: data.weather[0].description,
      });
      setLastUpdated(new Date().toLocaleTimeString());
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }
    setLoading(false);
  };

  useEffect(() => {
    getWeather(city);
    if (autoRefresh) {
      intervalRef.current = setInterval(() => getWeather(city), 10000);
    }
    return () => clearInterval(intervalRef.current);
  }, [city, autoRefresh]);

  const handleSearch = () => {
    if (search.trim()) setCity(search.trim());
  };

  return (
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
    </div>
  );
}

export default WeatherApp;
