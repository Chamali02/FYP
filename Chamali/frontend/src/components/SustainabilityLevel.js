import React, { useState,useEffect  } from 'react';
import axios from 'axios';
import {jwtDecode  }from 'jwt-decode';
import '../assets/styles/SustainabilityLevel.css';
import NavigationBar from './nav';
import Footer from './footer';

const SustainabilityLevel = () => {
  const [loading, setLoading] = useState(false);
  const [reportUrl, setReportUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); 

  const [currentLevel, setCurrentLevel] = useState(null);
  const [levelloading, levelsetLoading] = useState(true);

  const [topCompanies, setTopCompanies] = useState([]);

  const handleGenerateReport = async () => {
    setLoading(true);
    setErrorMessage(''); 







    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        const userid = decoded._id; 
        console.log(userid);

      
        const response = await axios.post('http://localhost:5000/get_report', { userid });

        if (response.status === 200 ) {
          setReportUrl(`http://localhost:5000/sustainability_report_${userid}.pdf`); 
        } else {
          console.error('Failed to generate report:', response.status);
          setErrorMessage('Failed to generate report. Please try again.');
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.error('No token found.');
      setErrorMessage('No token found. Please log in.');
    }


    setLoading(false);
  };


  useEffect(() => {


    const fetchTopCompanies = async () => {
      try {
        const response = await axios.get('http://localhost:4000/sustainability_level');
        setTopCompanies(response.data);
      } catch (error) {
        console.error('Error fetching top companies:', error);
      }
    };

    fetchTopCompanies();
  

    const sendPostRequest = async () => {

const companyName = localStorage.getItem('companyName');




      const token = localStorage.getItem('token'); 
    
      try {
        const decoded = jwtDecode(token); 
        const userid = decoded._id; 
      
        const response = await axios.post('http://localhost:5000/update_level', {
          userid, 
          companyName 
        });
        console.log('Success:', response.data);
      } catch (error) {
        console.log("Level set to 0 due to an error.");

        setCurrentLevel(0);
        console.error('Error posting data:', error);
      }
      
    };
    sendPostRequest();







    const fetchCurrentLevel = async () => {
      setLoading(true);
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const decoded = jwtDecode(token);
          const userid = decoded._id; 
          
          const response = await axios.get(`http://localhost:5000/get_rate?userid=${userid}`);
          setCurrentLevel(response.data.rate);
        } catch (error) {
          console.error('Error fetching the current level:', error);
      
        }
      } else {
        console.error('No token found.');

      }
      setLoading(false);
    };

    fetchCurrentLevel();
  }, []); 
  return (
    <><NavigationBar/>

<div className="dashboard-container">


<div className="top-companies-container">
      <h1>Top Sustainable Companies</h1>
      <div className="company-list">
        {topCompanies.map((company, index) => (
          <div key={index} className="company-card">
            <h2 className="company-name">{company.companyName}</h2>
            <div className="company-rating">
              <i className="fas fa-star"></i>
              <span>{company.rate.toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>


  <div className="dashboard">
    <div className="level-display-container">
      {loading ? (
        <div className="loader">Loading your sustainability level...</div>
      ) : (
        currentLevel !== null && (
          <div className="level-display-card">
            <p className="level-display-text">Your Current Sustainability Level:</p>
            <strong className="level-display-value">{currentLevel}</strong>
          </div>
        )
      )}
    </div>

    <div className="report-container">
      {!reportUrl ? (
        <>
          {loading ? (
            <div className="loader">Generating report, please wait...</div>
          ) : (
            <>
              <p className="report-instruction-text">Click the button below to generate the sustainability report.</p>
              <button onClick={handleGenerateReport} className="generate-report-btn">
                Generate Sustainability Report
              </button>
            </>
          )}
        </>
      ) : (
        <div className="download-container">
          <p className="download-ready-text">Report is ready to download.</p>
          <button onClick={() => window.open(reportUrl, '_blank')} className="download-report-btn">
            Download Report
          </button>
        </div>
      )}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  </div>


</div>
<Footer />
    </>

  );
};

export default SustainabilityLevel;
