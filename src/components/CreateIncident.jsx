import React, { useState } from 'react';
import axios from 'axios';
import './CreateIncident.scss'


const CreateIncident = () => {
  const [formData, setFormData] = useState({
    accused: '',
    victim: '',
    reported_by: '',
    location: '',
    date: '',
    incident: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:5000/incidents', formData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer your_token_here', // Replace with your actual token
        },
      });

      // Handle success, e.g., show a success message or redirect to another page
      console.log('Incident logged successfully', response.data);
    } catch (error) {
      // Handle error, e.g., show an error message
      console.error('Error logging incident', error);
    }
  };

  return (
    <div>
      <h3>Log an Incident</h3>
      <form onSubmit={handleSubmit}>
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
          <label htmlFor="incident">Incident:</label>
          <textarea
            id="incident"
            name="incident"
            value={formData.incident}
            onChange={handleChange}
            cols="30"
            rows="10"
            required
          ></textarea>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CreateIncident;
