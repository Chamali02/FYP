import React, { useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode'; 
import '../assets/styles/CertificateGenerator.css'; 
import NavigationBar from './nav';
import Footer from './footer';

const CertificateGenerator = () => {
    const [downloadLink, setDownloadLink] = useState('');
    const [error, setError] = useState('');
    const [isGenerating, setIsGenerating] = useState(false); // State to manage loading state

    const handleGenerateCertificate = async () => {
        setIsGenerating(true); // Start the loading state
        setError(''); // Clear previous errors
        const token = localStorage.getItem('token');
        const companyName = localStorage.getItem('companyName');

        if (!token || !companyName) {
            setError('User ID or Company Name is missing.');
            setIsGenerating(false);
            return;
        }

        try {
            const decoded = jwtDecode(token);
            const userid = decoded._id; 

            const response = await axios.post('http://localhost:5000/certificate', {
                userid: decoded._id, 
                companyName: companyName 
            });

            if (response.status === 200) {
                setDownloadLink(`http://localhost:5000/${userid}.pdf`);
            } else {
                setError('Failed to generate certificate. Please try again.');
            }
        } catch (error) {
            setError('Error: ' + error.message);
        }
        setIsGenerating(false); // End the loading state
    };

    return (
        <>
        <NavigationBar/>
        <div className="certificate-generator" >
            {!downloadLink && (
                <button className="generate-btn" onClick={handleGenerateCertificate} disabled={isGenerating}>
                    {isGenerating ? 'Generating...' : 'Generate Certificate'}
                </button>
            )}
            {downloadLink && (
                <div className="download-section">
                    <a className="download-link" href={downloadLink} download="Certificate.pdf">Download Certificate</a>
                </div>
            )}
            {error && <p className="error-message">{error}</p>}
        </div>
        <Footer/>
        </>
    );
};

export default CertificateGenerator;
