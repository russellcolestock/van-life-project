import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans';
import VanDetail from './pages/VanDetail';

import "./server"

function App() {
    return (
      <BrowserRouter>
        <header>
          <nav>
              <Link className="site-logo" to="/">#VanLife</Link>
              <div className='nav-links-container'>
                  <Link to="/about" className='nav-link'>About</Link>  
                  <Link to="/vans" className='nav-link'>Vans</Link>          
              </div>
          </nav>

        </header>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/vans' element={<Vans />} />
              <Route path='/vans/:id' element={<VanDetail />} />

          </Routes>
          <footer>Ⓒ 2022 #VANLIFE</footer>
      </BrowserRouter>
    )
  }

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);