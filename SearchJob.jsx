import React, { useState } from 'react';
import Sidebar from '../components/SideBar';
import BackButton from '../components/BackButton';
import { useJobs } from '../context/JobContext';

const SearchJob = () => {
  const { jobs = [], saveJob } = useJobs();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All');

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'All' || job.type === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r shadow-md">
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-50">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Search Job</h1>
          <BackButton />
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Search by job title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/2 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="w-full md:w-1/4 px-4 py-2 border rounded focus:outline-none"
          >
            <option value="All">All Types</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Internship">Internship</option>
          </select>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredJobs.length === 0 ? (
            <p className="text-gray-600">No jobs found.</p>
          ) : (
            filteredJobs.map((job, index) => (
              <div key={index} className="bg-white p-6 rounded shadow-md border">
                <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
                <p className="text-sm text-gray-500">{job.company} • {job.location}</p>
                <p className="mt-2 text-gray-700">{job.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm text-green-600 font-medium">{job.type}</span>
                  <span className="text-sm text-gray-600">{job.salary}</span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <button className="bg-green-600 text-white py-2 rounded hover:bg-green-700">
                    Apply Now
                  </button>
                  <button
                    onClick={() => saveJob(job)}
                    className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                  >
                    Save Job
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default SearchJob;




