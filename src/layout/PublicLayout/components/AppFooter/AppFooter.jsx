import React from "react";

export default function AppFooter() {
  return (
    <footer className="bg-blue-700 text-white shadow py-4 mt-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm">
        <p>
          © {new Date().getFullYear()} Weather Tracker | Built with React.
        </p>
       
      </div>
    </footer>
  );
}

 
