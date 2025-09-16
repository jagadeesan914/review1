// src/pages/JobOffers.jsx
import React from 'react';
import Sidebar from '../components/SideBar';
import BackButton from '../components/BackButton';

const JobOffers = () => {
  const jobOffers = [
    {
      title: 'Frontend Developer',
      company: 'TechNova',
      location: 'Chennai',
      salary: '₹8,00,000/year',
      offerDate: 'July 25, 2025',
    },
    {
      title: 'UI/UX Designer',
      company: 'Designify',
      location: 'Bangalore',
      salary: '₹6,50,000/year',
      offerDate: 'July 22, 2025',
    },
    {
      title: 'Backend Developer',
      company: 'CodeCraft',
      location: 'Remote',
      salary: '₹9,00,000/year',
      offerDate: 'July 20, 2025',
    },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r shadow-md">
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-50">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Job Offers</h1>
          <BackButton />
        </div>

        {jobOffers.length === 0 ? (
          <p className="text-gray-600">You have no job offers at the moment.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {jobOffers.map((offer, index) => (
              <div key={index} className="bg-white p-6 rounded shadow-md border">
                <h3 className="text-xl font-semibold text-blue-800">{offer.title}</h3>
                <p className="text-sm text-gray-600">{offer.company} • {offer.location}</p>
                <div className="mt-2 flex justify-between text-sm text-gray-700">
                  <span>Offer Date: {offer.offerDate}</span>
                  <span className="font-medium text-green-600">{offer.salary}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default JobOffers;



