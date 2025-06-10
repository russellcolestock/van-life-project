import React from "react";
import { Link } from "react-router-dom"

export default function Header() {
    return (
         <header>
          <nav>
              <Link className="site-logo" to="/">#VanLife</Link>
              <div className='nav-links-container'>
                <Link to="/host">Host</Link>
                <Link to="/about" className='nav-link'>About</Link>  
                <Link to="/vans" className='nav-link'>Vans</Link>          
              </div>
          </nav>
        </header>
    )
}