import { API_KEY } from "../config";

export const fetchWeather = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Failed to fetch weather for "${city}"`);
  }

  return await res.json();
};
