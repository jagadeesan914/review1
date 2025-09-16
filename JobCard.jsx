const JobCard = ({ job }) => (
  <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
    <h3 className="text-xl font-semibold">{job.title}</h3>
    <p className="text-purple-600 font-bold mb-2">${job.salary}</p>
    <p className="text-gray-700 mb-2">{job.description}</p>
    <div className="flex justify-between text-sm text-gray-500">
      <span>📍 {job.location}</span>
      <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded">{job.type}</span>
    </div>
  </div>
);
export default JobCard;
