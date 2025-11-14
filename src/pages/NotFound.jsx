import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-lg mb-6">Oops! Page not found.</p>
      <Link to="/" className="text-blue-600 underline">
        Go back to Dashboard
      </Link>
    </div>
  );
};

export default NotFound;