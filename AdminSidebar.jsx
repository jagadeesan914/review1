import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const AdminSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  const menuItems = [
    { label: 'Dashboard', path: '/admin' },
    { label: 'Manage Jobs', path: '/admin/manage-jobs' },
    { label: 'Manage Users', path: '/admin/users' },
    { label: 'Applications', path: '/admin/applications' },
    { label: 'Messages', path: '/admin/messages' },
    { label: 'Admin Profile', path: '/admin/profile' },
    
   
  ];

  return (
    <div className="w-64 min-h-screen bg-white border-r shadow-md p-4">
      <h2 className="text-2xl font-bold mb-6 text-center text-green-700">Work Nest</h2>
      <nav className="flex flex-col gap-3">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `block px-4 py-2 rounded ${
                isActive ? 'bg-green-600 text-white' : 'text-gray-700 hover:bg-green-100'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
        <button
          onClick={handleLogout}
          className="mt-6 w-full text-left px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Logout
        </button>
      </nav>
    </div>
  );
};

export default AdminSidebar;

