// App.jsx
// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { JobProvider } from "./context/JobContext";

import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import SavedJobs from "./pages/SavedJobs";
import Applications from "./pages/Applications";
import JobOffers from "./pages/JobOffers";
import RecruiterMessages from "./pages/RecruiterMessages";

import AdminPanel from "./pages/AdminPanel";
import ManageJobs from "./pages/ManageJobs";
import ManageUsers from "./pages/ManageUsers";
import AdminApplications from "./pages/AdminApplications";
import AdminMessages from "./pages/AdminMessages";
import AdminProfile from "./pages/AdminProfile";

import SearchJob from "./pages/SearchJob";
import JobDetails from "./pages/JobDetails";

function App() {
  return (
    <Router>
      <AuthProvider>
        <JobProvider>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/job/:id" element={<JobDetails />} />

            {/* User protected routes */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute role="user">
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute role="user">
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/saved"
              element={
                <ProtectedRoute role="user">
                  <SavedJobs />
                </ProtectedRoute>
              }
            />
            <Route
              path="/applications"
              element={
                <ProtectedRoute role="user">
                  <Applications />
                </ProtectedRoute>
              }
            />
            <Route
              path="/offers"
              element={
                <ProtectedRoute role="user">
                  <JobOffers />
                </ProtectedRoute>
              }
            />
            <Route
              path="/messages"
              element={
                <ProtectedRoute role="user">
                  <RecruiterMessages />
                </ProtectedRoute>
              }
            />
            <Route
              path="/search-job"
              element={
                <ProtectedRoute role="user">
                  <SearchJob />
                </ProtectedRoute>
              }
            />

            {/* Admin protected routes */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute role="admin">
                  <AdminPanel />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/manage-jobs"
              element={
                <ProtectedRoute role="admin">
                  <ManageJobs />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/users"
              element={
                <ProtectedRoute role="admin">
                  <ManageUsers />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/applications"
              element={
                <ProtectedRoute role="admin">
                  <AdminApplications />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/messages"
              element={
                <ProtectedRoute role="admin">
                  <AdminMessages />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/profile"
              element={
                <ProtectedRoute role="admin">
                  <AdminProfile />
                </ProtectedRoute>
              }
            />
          </Routes>
        </JobProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
