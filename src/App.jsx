import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navber'; 
import Home from './components/home';
import About from './components/AboutUs';
import Portfolio from './components/portfolio';
import Services from './components/Service';
import Blogs from './components/Blog';
import Contact from './components/Contact';
import './App.css'
import './index.css'


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/Services" element={<Services />} />
         <Route path="/blog" element={<Blogs />} />
        <Route path="/Contact" element={<Contact />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
