import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authUserContext";

export function PrivateRoute({ children }) {
    const { isLogged } = useAuth()
    
    return isLogged ? children : <Navigate to='/login' />
}