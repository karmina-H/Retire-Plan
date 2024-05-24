import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/header';
import Home from './pages/home/home';
import Calculate from './pages/calculate/calculate';
import What from './pages/what/what';
import About from './pages/about/about';
import Enter from './pages/Enterprise/enter';
import Planning from './pages/planning/planning';
import Pricing from './pages/pricing/pricing';

function App() {
  return (
      <div>
        <BrowserRouter>
          <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/what" element={<What />} />
              <Route path="/calculate" element={<Calculate />} />
              <Route path="/about" element={<About />} />
              <Route path="/enter" element={<Enter />} />
              <Route path="/planning" element={<Planning />} />
              <Route path="/pricing" element={<Pricing />} />
           </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;