import React from "react";
import useAuth from "../Hooks/useAuth";
import Spinner from '../Components/Spinner/Spinner'
import { Navigate, useLocation } from "react-router";
export default function PrivateRoutes({ children }) {
    const { user, loading } = useAuth();
    const location = useLocation()
    if (user) {
        return children
    }
    if (loading) {
        return <Spinner></Spinner>
    }
    return <Navigate to='/login' state={location?.pathname}></Navigate>
}
