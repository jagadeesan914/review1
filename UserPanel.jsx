import Sidebar from './SideBar';
import JobCard from './JobCard';
import JobFilters from './JobFilters';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const UserPanel = () => {
  const jobs = JSON.parse(localStorage.getItem('jobs')) || [
    {
      title: 'Frontend Developer',
      salary: '14,000 - 25,000',
      location: 'London, England',
      type: 'Remote',
      description: 'Build amazing UIs using React.',
    },
    {
      title: 'Backend Developer',
      salary: '14,000 - 25,000',
      location: 'New York, USA',
      type: 'Freelance',
      description: 'Work with APIs and databases.',
    },
  ];

  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-64 p-8 bg-gray-50 min-h-screen w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Search Jobs</h2>
          
        </div>

        <JobFilters />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default UserPanel;

