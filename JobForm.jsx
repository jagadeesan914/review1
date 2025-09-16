import { useState } from 'react';

const JobForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [location, setLocation] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();

    
    onAdd({ title, desc, location });

    setTitle('');
    setDesc('');
    setLocation(''); 
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        className="w-full mb-3 px-3 py-2 border rounded"
        placeholder="Job Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        className="w-full mb-3 px-3 py-2 border rounded"
        placeholder="Job Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        required
      />
      {}
      <input
        className="w-full mb-3 px-3 py-2 border rounded"
        placeholder="Location (e.g. Boston, Remote)"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Add Job
      </button>
    </form>
  );
};

export default JobForm;


