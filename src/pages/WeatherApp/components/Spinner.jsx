import React from "react";

function Spinner() {
  return (
    <div className="flex justify-center my-4">
      <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent animate-spin rounded-full"></div>
    </div>
  );
}

export default Spinner;
