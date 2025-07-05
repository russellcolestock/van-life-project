import React from "react";
import { Link, NavLink } from "react-router-dom"
import imageUrl from "/images/login-icon.png" 

export default function Header() {
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    function fakeLogOut() {
      localStorage.removeItem("loggedin")
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
                <Link to="login" className="login-link">
                  <img 
                    src={imageUrl} 
                    className="login-icon"
                  />
                </Link>          
              </div>
              <button onClick={fakeLogOut}>X</button>
          </nav>
        </header>
    )
}