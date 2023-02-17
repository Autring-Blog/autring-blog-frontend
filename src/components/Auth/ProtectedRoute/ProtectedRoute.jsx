import React, { useEffect } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from '../../Loader/Loader';

const ProtectedRoute = ({children}) => {
  const { loading, isAuthenticated } = useSelector((state) => state.user);
  // if (loading === false && !isAuthenticated) {
  //     return <Navigate to="/signin" />
  // }
  const location = useLocation()
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user) {
    return <Navigate to="/signin" state={{ from: location }} />;
  }
    return <Outlet />;




  // if (!isAuthenticated) {
  //   return <Navigate to='/signin' />;
  // }


  // if (user && user.role === 'admin') {
  //   return <Navigate to='/dashboard' />;
  // }
  // return loading === false && <Outlet />;
};

export default ProtectedRoute;

