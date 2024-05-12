
import React from 'react';
import '../assets/styles/homestyle.css';
import { useNavigate } from 'react-router-dom';
import NavigationBar from './nav';


const Home = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');  

  const handleNavigate = () => {
    navigate('/register'); 
  };
  return (
    <>
      {token ? (
        <NavigationBar />
      ) : (
        <nav>
          <a href="#">HOME</a>
          <a href="#services">SERVICES</a>
          <a href="#">ABOUT US</a>
          <a href="#faq-container">FAQ</a>
          <a href="login">LOGIN</a>
          <button onClick={handleNavigate}>Join now</button>
        </nav>
      )}
      <header>
        <h1>Measure the Sustainability level in your company</h1>
        <p>Introducing a comprehensive sustainability assessment tool specifically designed for the tourism industry in Sri Lanka.</p>
        <small>Trusted by 50+ leading tourism companies in Sri Lanka</small>
        <div className="logos">
          {}
          <img src="path/to/your/logo1.png" alt="Logo" />
          <img src="path/to/your/logo2.png" alt="Logo" />
          <img src="path/to/your/logo3.png" alt="Logo" />
          <img src="path/to/your/logo4.png" alt="Logo" />
        </div>
      </header>



      <div class="services" id = "services">
        <h1>OUR SERVICES</h1>
        <div class="service">
            <h2>Initiate Evaluation With Our Tool</h2>
            <p>Regulate and initiate a basic sustainability evaluation within your tourism operations using our streamlined tool.</p>
        </div>
        <div class="service">
            <h2>Guidance Throughout the Process</h2>
            <p>Receive continuous guidance and strategic suggestions throughout your action planning and implementation of sustainability practices.</p>
        </div>
        <div class="service">
            <h2>Presenting A New Grading System</h2>
            <p>Our grading system enables companies to assess, exhibit, and share their sustainability efforts and accomplishments.</p>
        </div>
        
        <div class="service">
            <h2>Initiate Evaluation With Our Tool</h2>
            <p>Regulate and initiate a basic sustainability evaluation within your tourism operations using our streamlined tool.</p>
        </div>
    </div>




  
    <div class="faq-container" id = "faq-container">
        <h2>FREQUENTLY ASKED QUESTIONS</h2>
        <div class="faq-item">
            <p>How does the grading system work?</p>
            <span>+</span>
        </div>
        <div class="faq-item">
            <p>What does the action plan include?</p>
            <span>+</span>
        </div>
        <div class="faq-item">
            <p>Is there a guide through the process?</p>
            <span>+</span>
        </div>
        <div class="faq-item">
            <p>How can we share sustainability accomplishments?</p>
            <span>+</span>
        </div>
    </div>

      






    </>
  );
};

export default Home;
