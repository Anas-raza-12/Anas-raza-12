import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import Navber from "./assets/components/header.jsx";
import Footer from "./assets/components/footer.jsx";
import Home from "./assets/components/Home.jsx";
import AboutUs from "./assets/components/aboutUs.jsx";

const App = () => {
  return (
    <Router>
      <Navber />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
