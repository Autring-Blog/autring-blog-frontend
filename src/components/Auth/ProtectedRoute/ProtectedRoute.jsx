import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux'

const ProtectedRoute = () => {
    const { loading, isAuthenticated } = useSelector((state) => state.user);
    // if (loading === false && !isAuthenticated) {
    //     return <Navigate to="/signin" />
    // }
    if (!isAuthenticated) {
        return <Navigate to="/signin" />
    }
    return loading === false && <Outlet />
}

export default ProtectedRoute