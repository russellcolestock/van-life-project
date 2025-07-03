import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function AuthRequired() {
    const authenticated = false

    if (!authenticated) {
        return (
            <Navigate 
                to="/login" 
                state={ {message: "You must log in first"} }
                //Remember the 1st set of brackets is for Javascript; 
                // the 2nd set is the Javascript object
            />)
    }

    return <Outlet />
}