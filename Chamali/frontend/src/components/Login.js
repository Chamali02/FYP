import React, { useState } from 'react';
import axios from 'axios';
import '../assets/styles/login.css';
import {jwtDecode  }from 'jwt-decode'; 
import { useNavigate } from "react-router-dom";
import NavigationBar from './nav';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const navigate = useNavigate();

  const [error, setError] = useState('');

  const handleNavigate = () => {
    navigate('/register'); 
  };

  const token = localStorage.getItem('token');  

  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials(prevCredentials => ({
      ...prevCredentials,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/login', credentials);
      const token = response.data.token; 
      localStorage.setItem('token', token); 
      console.log(token);
      console.log(response.data.companyName);
      console.log(response.data.companyName);

      const compayname = response.data.companyName;
      localStorage.setItem('companyName', compayname); 
    
      const decodedToken = jwtDecode(token);
      console.log(decodedToken._id); 
    
      navigate("/dashboard");
    } catch (error) {
      setError('Invalid username or password');
      console.error('Login error', error);
    }
  };

  return (
    <> {token ? (
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
    <div className="login-container">
      <h2>Login</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
    </>
  );
};

export default Login;
