import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Vans/Home';
import About from './pages/Vans/About';
import Vans from './pages/Vans/Vans';
import VanDetail from './pages/Vans/VanDetail';
import Layout from './components/Layout'
import Dashboard from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'

import "./server"
import HostLayout from './components/HostLayout';

function App() {
    return (
      <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/vans' element={<Vans />} />
              <Route path='/vans/:id' element={<VanDetail />} />

              <Route path='/host' element={<HostLayout />} >
                <Route path='/host/income' element={<Income />} />
                <Route path='/host/reviews' element={<Reviews />} />
              </Route>
            </Route> 
        </Routes> 
          <footer>Ⓒ 2022 #VANLIFE</footer>
      </BrowserRouter>
    )
  }

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);