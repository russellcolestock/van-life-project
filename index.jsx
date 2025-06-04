import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

import "./server"

function App() {
    return (
      <BrowserRouter>
          <nav>
              <h1>#VANLIFE</h1>
              <div className='nav-links-container'>
                  <Link to="/" className='nav-link'>Home</Link>
                  <Link to="/about" className='nav-link'>About</Link>            
              </div>
          </nav>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
          </Routes>
          <footer>Ⓒ 2022 #VANLIFE</footer>
      </BrowserRouter>
    )
  }

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);