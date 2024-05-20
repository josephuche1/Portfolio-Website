import React from 'react';
import { Route, Navigate, RouteProps } from 'react-router-dom';
import { useAuth } from '../../utils/Authentication/AuthContext';

interface ProtectedRouteProps {
    component: React.ComponentType<any>;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component: Component, ...rest }) => {
    const { user} = useAuth();

    return (
        <Route
            {...rest}
            element={
                user && user.role === "admin" ? (
                    <Component />
                ) : (
                    <Navigate to="/login" replace />
                )
            }
        />
    )
};

export default ProtectedRoute;