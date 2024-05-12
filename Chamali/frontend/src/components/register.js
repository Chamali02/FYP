
import React, { useState } from 'react';
import axios from 'axios';
import '../assets/styles/register.css'; 
import NavigationBar from './nav';
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [registrationData, setRegistrationData] = useState({
    companyName: '',
    companyEmail: '',
    username: '',
    position: '',
    password: '',
    numberOfEmployees: '',
    phoneNumber: '',
    address: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRegistrationData({ ...registrationData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage(''); 
    setSuccessMessage(''); 
    try {
      const response = await axios.post('http://localhost:4000/register', registrationData);
      console.log(response.data);
      //localStorage.setItem('token', response.data.token);
      setSuccessMessage('Registration successful.');

    } catch (error) {
      console.error('Registration failed: ', error.response.data);
      setErrorMessage('Registration failed. Please try again.');
    
    }


  
  };
  const navigate = useNavigate();

  const token = localStorage.getItem('token');  
  const handleNavigate = () => {
    navigate('/register'); 
  };
  return (
    <>{token ? (
      <NavigationBar />
    ) : (
      <nav>
        <a href="/">HOME</a>
        <a href="/#services">SERVICES</a>
        <a href="/#">ABOUT US</a>
        <a href="/#faq-container">FAQ</a>
        <a href="login">LOGIN</a>
        <button onClick={handleNavigate}>Join now</button>
      </nav>
    )}
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h1>Register</h1>
        <input type="text" name="companyName" placeholder="Company Name" onChange={handleChange} required />
        <input type="email" name="companyEmail" placeholder="Company Email" onChange={handleChange} required />
        <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
        <input type="text" name="position" placeholder="Position" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <input type="number" name="numberOfEmployees" placeholder="Number of Employees" onChange={handleChange} required />
        <input type="tel" name="phoneNumber" placeholder="Phone Number" onChange={handleChange} required />
        <textarea name="address" placeholder="Address" onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}
    </div>
    </>
  );
};

export default Register;
