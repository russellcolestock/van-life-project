import React from "react";
import { Link, NavLink } from "react-router-dom"

export default function Header() {
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"

    }

    return (
         <header>
          <nav>
              <Link className="site-logo" to="/">#VanLife</Link>
              <div className='nav-links-container'>
                <NavLink 
                    to="/host" className='nav-link'
                    style={ ({isActive}) => isActive ? activeStyle : null }          
                >
                  Host
                </NavLink>
                <NavLink 
                    to="/about" className='nav-link'
                    style={ ({isActive}) => isActive ? activeStyle : null }
                >
                  About
                </NavLink>  
                <NavLink 
                    to="/vans" className='nav-link'
                    style={ ({isActive}) => isActive ? activeStyle : null }
                >
                  Vans
                </NavLink>          
              </div>
          </nav>
        </header>
    )
}