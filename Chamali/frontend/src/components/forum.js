import React, { useState } from 'react';
import axios from 'axios';
import '../assets/styles/forum.css';
import { jwtDecode } from 'jwt-decode';
import NavigationBar from './nav';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    green_purchase: '',
    electricity_consumption: '',
    water_usage: '',
    carbon_footprint: '',
    waste_recycling_rate: '',
    waste_reduction_rate: '',
    use_of_toxic_materials: '',
    employee_well_being: '',
    labor_practices: '',
    community_engagement: '',
    supply_chain_ethics: '',
    financial_performance: '',
  });
  const [file, setFile] = useState(null);
  const [date, setDate] = useState(null);
  const token = localStorage.getItem('token');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
console.log("hello");
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    const token = localStorage.getItem('token');

    const getUserDataFromToken = () => {
      const token = localStorage.getItem('token');
      if (token) {
          try {
              const decoded = jwtDecode(token);
              return decoded; 
          } catch (error) {
              console.error("Failed to decode token", error);
              return null;
          }
      }
      return null;
  }

    if (file) {
      data.append('evidence_image', file);
    

    }

      const decoded = jwtDecode(token); 
      console.log(decoded._id);
      data.append('userid', decoded._id);


    




    if (date) {
      data.append('date', date);
    }

    try {
      const response = await axios.post('http://127.0.0.1:5000/submit', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        setSuccessMessage('Form submitted successfully!');
        setErrorMessage(''); 
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {

        const message = error.response.data.error || 'Error submitting the form. Please check your input.';
        setErrorMessage(message);
      } else {
      
        setErrorMessage('There was an error submitting the form!');
        console.error('There was an error submitting the form!', error);
      }
      setSuccessMessage(''); 
    }
    
    
  };

  return (
 <>   
 <NavigationBar/>
 
 <form onSubmit={handleSubmit}>
 {Object.keys(formData).map((key) => (
   <div key={key} className="form-group">
     <label>
       {key.split('_').join(' ')}:
       <input
         type="text"
         name={key}
         value={formData[key]}
         onChange={handleInputChange}
       />
     </label>
   </div>
 ))}
 <div className="form-group">
   <label>
   Green Purchase Evidence Image:
     <input
       type="file"
       name="evidence_image"
       onChange={handleFileChange}
     />
   </label>
 </div>
 <div className="form-group">
   <label>
     Date:
     <input
       type="date"
       name="date"
       value={formData.date || ''} 
       onChange={handleInputChange}
     />
   </label>
 </div>
 <button type="submit">Submit</button>
 {successMessage && (
  <div className="success-message">{successMessage}</div>
)}

{errorMessage && (
  <div className="error-message">{errorMessage}</div>
)}

</form>

 </>
  );
};

export default FormComponent;
