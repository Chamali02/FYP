import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import FormComponent from './components/forum';
import Register from './components/register';
import SustainabilityLevel from './components/SustainabilityLevel';
import CertificateFetcher from './components/CertificateFetcher';
import HelpPage from './components/HelpPage';


function App() {
  return (
    <Router>
   
        <Routes>
          <Route path="/" element={<Home />} />
       <Route path="/login" element={<Login />} /> 
       <Route path="/forum" element={<FormComponent />} /> 
       <Route path="/register" element={<Register />} /> 
       <Route path="/dashboard" element={<SustainabilityLevel />} /> 
       <Route path="/certification" element={<CertificateFetcher />} /> 
       <Route path="/help" element={<HelpPage />} /> 

        </Routes>
  
    </Router>
  );
}

export default App;
