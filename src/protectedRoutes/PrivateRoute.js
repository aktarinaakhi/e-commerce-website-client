import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';


const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    let location = useLocation();
    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (user.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;

};

export default PrivateRoute;