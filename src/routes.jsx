import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import PublicLayout from './layout/PublicLayout';
import { WeatherApp, AboutPage, SettingsPage } from "./pages";

function AppRoutes() {
  return (
    <BrowserRouter>
    <Routes>
    <Route element={<PublicLayout />}>
      <Route path="/" element={<WeatherApp />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/settings" element={<SettingsPage />} />
    </Route>

     <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
