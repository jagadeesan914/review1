import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-green-800 text-white fixed">
      <h2 className="text-2xl font-bold p-4">WorkNest</h2>
      <nav className="flex flex-col gap-2 px-4">
        <Link to="/dashboard" className="hover:bg-green-600 p-2 rounded">🏠 Dashboard</Link>
        <Link to="/search-job" className="hover:bg-green-600 p-2 rounded">🔍 Search Job</Link>
        <Link to="/applications" className="hover:bg-green-600 p-2 rounded">📄 Applications</Link>
        <Link to="/saved-jobs" className="hover:bg-green-600 p-2 rounded">💾 Saved Jobs</Link>
        <Link to="/profile" className="hover:bg-green-600 p-2 rounded">👤 Profile</Link>
        <Link to="/login" className="hover:bg-red-600 p-2 rounded mt-auto">🚪 Logout</Link>
      </nav>
    </div>
  );
};

export default Sidebar;

