import React, { useState } from 'react';
import axios from 'axios';
import './CreateIncident.scss'
import Navbar from '../layout/Navbar';
import SideNav from '../layout/SideNav';


const CreateIncident = () => {
  const [formData, setFormData] = useState({
    name:'',
    accused: '',
    victim: '',
    reported_by: '',
    location: '',
    date: '',
    message: '',
    status: '',
  });
  const [successMessage, setSuccessMessage] = useState('');

  const token = localStorage.getItem('token');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://occurances-digital-book.onrender.com/incidents', formData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('Incident Created successfully', response.data);
      setSuccessMessage('Incident logged successfully');
      setFormData({
        name: '',
        accused: '',
        victim: '',
        reported_by: '',
        location: '',
        date: '',
        message: '',
        status: '',
      });

      setTimeout(() => {
        setSuccessMessage('');
      }, 2000);
    } catch (error) {
      console.error('Error logging incident', error);
    }
  };

  return (

    <div className="create-container">
    <div className="nav">
        <Navbar/>
    </div>
    <div className='main'>
   <div className="side-nav">
   <SideNav />
   </div>
   <div className="main-content">
   <div className='form-container'>
      <h3>Log an Incident</h3>
      <form onSubmit={handleSubmit}>
            {successMessage && (
              <div className="success-message">{successMessage}</div>
            )}
      <div>
          <label htmlFor="accused">Incident Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="accused">Accused:</label>
          <input
            type="text"
            id="accused"
            name="accused"
            value={formData.accused}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="victim">Victim:</label>
          <input
            type="text"
            id="victim"
            name="victim"
            value={formData.victim}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="reported_by">Reported By:</label>
          <input
            type="text"
            id="reported_by"
            name="reported_by"
            value={formData.reported_by}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="text"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="status">Status:</label>
          <input
            type="text"
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Incident:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            cols="30"
            rows="5"
            required
          ></textarea>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
   </div>
</div>
</div>

   
  );
};

export default CreateIncident;
