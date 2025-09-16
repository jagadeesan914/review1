import React from 'react';
import Sidebar from '../components/SideBar';
import BackButton from '../components/BackButton';

const Applications = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen overflow-x-hidden">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md min-h-screen">
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header & Back Button */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">My Applications</h1>
          <BackButton />
        </div>

        {/* Applications List */}
        <div className="bg-white rounded shadow p-6 max-w-4xl mx-auto">
          <p className="text-gray-600 mb-4 text-center">
            You have applied to the following jobs:
          </p>

          <ul className="space-y-4">
            <li className="border p-4 rounded hover:bg-gray-50 text-center">
              <h2 className="font-semibold">Frontend Developer - TechCorp</h2>
              <p className="text-sm text-gray-500">Applied on: July 18, 2025</p>
            </li>
            <li className="border p-4 rounded hover:bg-gray-50 text-center">
              <h2 className="font-semibold">UI/UX Designer - Designify</h2>
              <p className="text-sm text-gray-500">Applied on: July 20, 2025</p>
            </li>
            <li className="border p-4 rounded hover:bg-gray-50 text-center">
              <h2 className="font-semibold">Data Analyst - AnalyticsPro</h2>
              <p className="text-sm text-gray-500">Applied on: July 22, 2025</p>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Applications;




