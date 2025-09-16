// src/pages/JobDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useJobs } from '../context/JobContext';

const JobDetails = () => {
  const { id } = useParams();
  const { jobs } = useJobs();

  const job = jobs.find((job) => job.id === id);

  if (!job) {
    return <div className="p-6 text-red-500">Job not found.</div>;
  }

  const handleApply = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      alert('Please log in to apply.');
      return;
    }

    const existingApplications = JSON.parse(localStorage.getItem('applications')) || [];

    const alreadyApplied = existingApplications.some(
      (app) => app.jobId === job.id && app.applicant === user.email
    );

    if (alreadyApplied) {
      alert('❌ You already applied for this job.');
      return;
    }

    const newApplication = {
      jobId: job.id,
      jobTitle: job.title,
      company: job.company,
      applicant: user.email,
      status: 'Pending',
      appliedAt: new Date().toLocaleString(),
    };

    const updatedApplications = [...existingApplications, newApplication];
    localStorage.setItem('applications', JSON.stringify(updatedApplications));

    alert('✅ You have applied for this job successfully!');
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow rounded">
      <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
      <p className="text-gray-600 mb-1">
        {job.company} • {job.location}
      </p>
      <p className="text-sm mb-4 text-gray-500">
        {job.type} • {job.salary}
      </p>
      <p className="text-gray-800 mb-4">{job.description}</p>
      <button
        onClick={handleApply}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Apply Now
      </button>
    </div>
  );
};

export default JobDetails;



