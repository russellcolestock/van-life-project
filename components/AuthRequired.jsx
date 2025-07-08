import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function AuthRequired() {
    const location = useLocation()
    
    const isLoggedIn = localStorage.getItem("loggedin")

    if (!isLoggedIn) {
        return (
            <Navigate 
                to="/login" 
                state={{
                    message: "You must log in first", 
                    from: location.pathname
                }}
                //Remember the 1st set of brackets is for Javascript; 
                // the 2nd set is the Javascript object
                replace
            />)
    }

    return <Outlet />
}