import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = () => {
  const { loading, isAuthenticated } = useSelector((state) => state.user);
  // if (loading === false && !isAuthenticated) {
  //     return <Navigate to="/signin" />
  // }

  const user = JSON.parse(localStorage.getItem('user'));
  console.log(isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to='/signin' />;
  }

  if (user && user.role === 'admin') {
    return <Navigate to='/dashboard' />;
  }
  return loading === false && <Outlet />;
};

export default ProtectedRoute;
