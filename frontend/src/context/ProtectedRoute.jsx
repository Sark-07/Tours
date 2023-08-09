import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { useEffect } from 'react';

export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated()) {
    // user is not authenticated
    toast.error('Please Login!');
    return <Navigate to='/signin' />;
  }
  return children;
};
// Add prop validation for restricted prop
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
