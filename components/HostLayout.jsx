import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {

    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    return (
        <>
            <nav className="host-layout-nav">
                <NavLink 
                    to="/host"
                    end /*The end prop tells React Router to end the matching here.
                        So if a more nested route matches, it won't also match this
                        link on this route. */ 
                    style={ ({isActive}) => isActive ? activeStyle : null }
                >
                    Dashboard
                </NavLink>
                <NavLink 
                    to="/host/income"
                    style={ ({isActive}) => isActive ? activeStyle : null }
                >
                    Income
                </NavLink>
                <NavLink 
                    to="/host/reviews"
                    style={ ({isActive}) => isActive ? activeStyle : null }
                >
                    Reviews
                </NavLink>
            </nav>
            <Outlet />
        </>
    )
}