// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import ContactSection from './components/Contact/ContactSection';
import Home from './pages/Home';
import SectorDetails from './pages/SectorDetails';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Header />
      
      {/* URL'ye göre değişecek dinamik sayfa alanı */}
      <Routes>
        {/* Sadece '/' yani ana domaine girildiğinde Home bileşenini aç */}
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        
        {/* '/sector/parametre' şeklindeki her link SectorDetails'i açar */}
        <Route path="/sector/:id" element={<SectorDetails />} />
      </Routes>
      
      <ContactSection />
    </Router>
  );
}

export default App;