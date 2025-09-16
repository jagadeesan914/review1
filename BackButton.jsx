
import { useLocation, useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  
  if (location.pathname === '/dashboard') {
    return null;
  }

  return (
    <button
      onClick={() => navigate('/dashboard')} 
      className="bg-gray-200 text-black px-4 py-2 rounded hover:bg-gray-300"
    >
      ← Back
    </button>
  );
};

export default BackButton;

