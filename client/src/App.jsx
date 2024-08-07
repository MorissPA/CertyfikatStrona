

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Kontakt from './page/Kontakt';
import Navbar from './component/Navbar';
import Oferta from './page/Oferta';
import StronaGlowna from './page/StronaGlowna';
import Onas from './page/Onas';
import ProductDetail from './page/ProductDetail';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from './component/Footer';
import Cennik from './page/Cennik';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<StronaGlowna />} />
        <Route path="/about" element={<Onas />} />
        <Route path="/offer" element={<Oferta />} />
        <Route path="/contact" element={<Kontakt />} />
        <Route path="/offer/:id" element={<ProductDetail />} />
        <Route path="/price" element={<Cennik />} />
<Route path="/offer" element={<Oferta />} />


      </Routes>
      <Footer/>
    </Router>

  );
};

export default App;
