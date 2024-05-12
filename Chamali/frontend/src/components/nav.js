import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles/NavigationBar.css';
import { useNavigate } from 'react-router-dom';

const NavigationBar = () => {
  const navigate = useNavigate(); 

  const handleLogout = () => {
    localStorage.clear();
    console.log('User logged out successfully');
    navigate('/login', { replace: true }); 
  };
  
    return (
      <nav className="navbar">
        <NavLink to="/" className="nav-logo">Sustainability</NavLink>
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink exact to="/dashboard" activeClassName="nav-active" className="nav-link">
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/forum" activeClassName="nav-active" className="nav-link">
              Environmental keys
            </NavLink>
          </li>
          
          <li className="nav-item">
            <NavLink to="/certification" activeClassName="nav-active" className="nav-link">
              Certification
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/help" activeClassName="nav-active" className="nav-link">
              Help
            </NavLink>
          </li>
          <li className="nav-item">
            <button onClick={handleLogout} className="nav-link logout-btn">
              Log out
            </button>
          </li>
        </ul>
      </nav>
    );
  };

export default NavigationBar;
