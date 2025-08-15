import React from "react";
import { AppHeader, AppFooter } from "./components";
import { Outlet } from "react-router-dom";

function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <AppHeader />
      
      <main className="flex-grow">
        <Outlet />
      </main>
      
      <AppFooter />
    </div>
  );
}

export default PublicLayout;
