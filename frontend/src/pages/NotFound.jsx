import React from 'react';
import { Link } from 'react-router-dom';
const NotFound = () => {
  return  <div className="p-4 text-center">
  <h2 className="text-4xl font-bold text-red-600 mb-4">404</h2>
  <p className="text-gray-600 mb-4">Oops! Page not found.</p>
  <Link to="/" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
    Back to Home
  </Link>
</div>
};

export default NotFound;


