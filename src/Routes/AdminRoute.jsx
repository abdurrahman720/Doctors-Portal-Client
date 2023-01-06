import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Authentication/Context/AuthProvider';
import useAdmin from '../hooks/useAdmin';

const AdminRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin,isAdminLoading] = useAdmin(user?.email);
    const location = useLocation();

    if (loading || isAdminLoading) {
        return   <div className=""><progress className="progress w-full"></progress></div>
    }
    if (user && isAdmin) {
        return children;
    }

    return <Navigate to='/login' state={{from:location}}></Navigate>
};

export default AdminRoute;