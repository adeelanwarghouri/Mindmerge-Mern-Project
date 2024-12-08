import React from "react";
import Navigation from "./Navbar";
import Signup from "./Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Contactus from "./Contactus";
import Rebuttals from "./Rebuttals";
import Script from "./Script";
import Add from "./Add-New";
import Footer from "./Footer";


function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/rebuttals" element={<Rebuttals />} />
        <Route path="/script" element={<Script />} />
        <Route path="/addscript" element={<Add />} />

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
