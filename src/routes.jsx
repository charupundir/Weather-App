import React from "react";
import { Routes, Route } from "react-router-dom";
import { WeatherApp, AboutPage, SettingsPage } from "./pages";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<WeatherApp />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
  );
}

export default AppRoutes;
