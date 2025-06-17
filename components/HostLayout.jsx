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
                    to="." /*The . syntax refers to the current directory, so <Link to="./details"> from /users/123 will navigate to /users/123/details */
                    end /*The end prop tells React Router to end the matching here.
                        So if a more nested route matches, it won't also match this
                        link on this route. */ 
                    style={ ({isActive}) => isActive ? activeStyle : null }
                >
                    Dashboard
                </NavLink>
                <NavLink 
                    to="income"
                    style={ ({isActive}) => isActive ? activeStyle : null }
                >
                    Income
                </NavLink>
                <NavLink 
                    to="vans"
                    style={ ({isActive}) => isActive ? activeStyle : null }
                >
                    Vans
                </NavLink>
                <NavLink 
                    to="reviews"
                    style={ ({isActive}) => isActive ? activeStyle : null }
                >
                    Reviews
                </NavLink>
            </nav>
            <Outlet />
        </>
    )
}