// src/components/AdminPanel.jsx
import React from 'react';
import AdminSidebar from '../components/AdminSidebar';
import AddJob from '../components/AddJob';

const AdminPanel = () => {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-6 bg-gray-50">
        <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
        <AddJob />
      </main>
    </div>
  );
};

export default AdminPanel;





