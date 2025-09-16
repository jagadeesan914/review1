import React, { useState } from 'react';
import BackButton from '../components/BackButton';

const AddJob = () => {
  const [job, setJob] = useState({
    title: '',
    company: '',
    location: '',
    type: 'Full-time',
    salary: '',
    description: '',
  });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newJob = {
      ...job,
      id: Date.now().toString(),
      postedAt: new Date().toLocaleString(),
    };

    const existingJobs = JSON.parse(localStorage.getItem('jobs')) || [];
    localStorage.setItem('jobs', JSON.stringify([newJob, ...existingJobs]));

    alert('✅ Job posted successfully!');

    // Reset form
    setJob({
      title: '',
      company: '',
      location: '',
      type: 'Full-time',
      salary: '',
      description: '',
    });
  };

  return (
    <main className="flex-1 p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800"></h1>
        <BackButton />
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-xl mx-auto"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Post a New Job</h2>

        <input
          name="title"
          placeholder="Job Title"
          value={job.title}
          onChange={handleChange}
          required
          className="mb-3 w-full px-4 py-2 border rounded"
        />
        <input
          name="company"
          placeholder="Company"
          value={job.company}
          onChange={handleChange}
          required
          className="mb-3 w-full px-4 py-2 border rounded"
        />
        <input
          name="location"
          placeholder="Location"
          value={job.location}
          onChange={handleChange}
          required
          className="mb-3 w-full px-4 py-2 border rounded"
        />
        <select
          name="type"
          value={job.type}
          onChange={handleChange}
          className="mb-3 w-full px-4 py-2 border rounded"
        >
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Internship">Internship</option>
          <option value="Remote">Remote</option>
        </select>
        <input
          name="salary"
          placeholder="Salary"
          value={job.salary}
          onChange={handleChange}
          required
          className="mb-3 w-full px-4 py-2 border rounded"
        />
        <textarea
          name="description"
          placeholder="Job Description"
          value={job.description}
          onChange={handleChange}
          required
          className="mb-4 w-full px-4 py-2 border rounded"
          rows={4}
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Post Job
        </button>
      </form>
    </main>
  );
};

export default AddJob;




