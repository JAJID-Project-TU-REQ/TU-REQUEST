import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const ProtectedStudentLayout = () => {
    const role = localStorage.getItem('role');

    if (!role === 'student') {
        return <Navigate to="/" />; // Redirect to login if not authenticated
    }

    return <Outlet />; // Render the protected routes inside this layout
};

export default ProtectedStudentLayout;