import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((store) => store.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      return navigate('/landing');
    }
  }, []);

  return children;
};

export default ProtectedRoute;
