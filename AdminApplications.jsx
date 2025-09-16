// src/pages/AdminApplications.jsx
import React, { useEffect, useState } from 'react';
import AdminSidebar from '../components/AdminSidebar';

const AdminApplications = () => {
  const [applications, setApplications] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('applications')) || [];
    setApplications(stored);
  }, []);

  const updateStatus = (index, newStatus) => {
    const updated = [...applications];
    updated[index].status = newStatus;
    setApplications(updated);
    localStorage.setItem('applications', JSON.stringify(updated));
  };

  const filtered = applications.filter((app) =>
    filter === 'All' ? true : app.status === filter
  );

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Job Applications</h1>
        <div className="mb-4">
          <label className="mr-2">Filter:</label>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border px-2 py-1 rounded"
          >
            <option>All</option>
            <option>Pending</option>
            <option>Approved</option>
            <option>Rejected</option>
          </select>
        </div>

        {filtered.length === 0 ? (
          <p>No applications found.</p>
        ) : (
          <table className="w-full bg-white rounded shadow">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2">Job</th>
                <th className="p-2">Company</th>
                <th className="p-2">Applicant</th>
                <th className="p-2">Applied At</th>
                <th className="p-2">Status</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((app, index) => (
                <tr key={index} className="text-center border-t">
                  <td className="p-2">{app.jobTitle}</td>
                  <td className="p-2">{app.company}</td>
                  <td className="p-2">{app.applicant}</td>
                  <td className="p-2">{app.appliedAt}</td>
                  <td className="p-2">{app.status}</td>
                  <td className="p-2 space-x-2">
                    {app.status === 'Pending' && (
                      <>
                        <button
                          onClick={() => updateStatus(index, 'Approved')}
                          className="bg-green-500 text-white px-3 py-1 rounded"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => updateStatus(index, 'Rejected')}
                          className="bg-red-500 text-white px-3 py-1 rounded"
                        >
                          Reject
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </main>
    </div>
  );
};

export default AdminApplications;




