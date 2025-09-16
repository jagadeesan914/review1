// src/context/JobContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const JobContext = createContext();

// ✅ Custom hook to consume context safely
export const useJobs = () => {
  const context = useContext(JobContext);
  if (!context) {
    throw new Error('useJobs must be used within a JobProvider');
  }
  return context;
};

export const JobProvider = ({ children }) => {
  // 🔹 Jobs for admin to manage
  const [jobs, setJobs] = useState(() => {
    const stored = localStorage.getItem('jobs');
    return stored ? JSON.parse(stored) : [];
  });

  // 🔹 Saved jobs (for users)
  const [savedJobs, setSavedJobs] = useState(() => {
    const stored = localStorage.getItem('savedJobs');
    return stored ? JSON.parse(stored) : [];
  });

  // 🔁 Sync jobs to localStorage
  useEffect(() => {
    localStorage.setItem('jobs', JSON.stringify(jobs));
  }, [jobs]);

  // 🔁 Sync savedJobs to localStorage
  useEffect(() => {
    localStorage.setItem('savedJobs', JSON.stringify(savedJobs));
  }, [savedJobs]);

  // ✅ Add new job (admin)
  const addJob = (job) => {
    const updated = [...jobs, job];
    setJobs(updated); // will trigger useEffect to store
  };

  // ✅ Save job (user)
  const saveJob = (job) => {
    const exists = savedJobs.find(j => j.title === job.title);
    if (!exists) {
      const updated = [...savedJobs, job];
      setSavedJobs(updated); // triggers localStorage update
    }
  };

  // ✅ Remove saved job (user)
  const removeJob = (title) => {
    const updated = savedJobs.filter(job => job.title !== title);
    setSavedJobs(updated);
  };

  return (
    <JobContext.Provider value={{ jobs, addJob, savedJobs, saveJob, removeJob, setJobs }}>
      {children}
    </JobContext.Provider>
  );
};


