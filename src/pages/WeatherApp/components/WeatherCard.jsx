import React from "react";

function WeatherCard({ weather, lastUpdated }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 text-center">
      <h2 className="text-2xl font-bold">{weather.name}</h2>
      <p className="text-lg">{weather.temp}°C</p>
      <p className="italic mb-2 capitalize">{weather.condition}</p>
      <p className="text-sm text-gray-500">Last updated: {lastUpdated}</p>
    </div>
  );
}

export default WeatherCard;
