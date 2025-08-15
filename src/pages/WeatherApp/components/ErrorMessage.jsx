import React from "react";

function ErrorMessage({ message }) {
  return (
    <div className="bg-red-100 text-red-700 p-3 rounded my-3 text-center">
      {message}
    </div>
  );
}

export default ErrorMessage;
