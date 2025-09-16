import React from 'react';
import Sidebar from '../components/SideBar';
import { useJobs } from '../context/JobContext';
import BackButton from '../components/BackButton';

const SavedJobs = () => {
  const { savedJobs = [], removeJob } = useJobs();

  return (
    <div className="flex min-h-screen overflow-x-hidden bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Saved Jobs</h1>
          <BackButton />
        </div>

        {/* Saved Jobs */}
        {savedJobs.length === 0 ? (
          <p className="text-gray-600">You have not saved any jobs yet.</p>
        ) : (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {savedJobs.map((job, index) => (
              <div key={index} className="bg-white p-6 rounded shadow border">
                <h2 className="text-lg font-semibold">{job.title}</h2>
                <p className="text-sm text-gray-500 mb-1">
                  {job.company} • {job.location}
                </p>
                <p className="text-sm text-gray-700 mb-2">{job.description}</p>

                <div className="flex justify-between text-sm text-gray-600 mb-4">
                  <span>{job.type}</span>
                  <span>{job.salary}</span>
                </div>

                <button
                  onClick={() => removeJob(job.title)}
                  className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default SavedJobs;







