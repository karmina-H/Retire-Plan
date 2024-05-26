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
import Sign_in from './pages/signin/sign_in';

import { useState } from 'react';

function App() {
  const [rock, setRock] = useState(false);
  return (
      <div>
        <BrowserRouter>
          <Header rock = {rock}/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/what" element={<What />} />
              <Route path="/calculate" element={<Calculate />} />
              <Route path="/about" element={<About />} />
              <Route path="/enter" element={<Enter />} />
              <Route path="/planning" element={<Planning />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/sign_in" element={<Sign_in />} />
           </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;