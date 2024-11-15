import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const ProtectedprofessorLayout = () => {
    const role = localStorage.getItem('role');

    if (!role === 'professor') {
        return <Navigate to="/" />; // Redirect to login if not authenticated
    }

    return <Outlet />; // Render the protected routes inside this layout
};

export default ProtectedprofessorLayout;