import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import './MainContent.scss';

const MainContent = () => {
  const [incidents, setIncidents] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchIncidents = async () => {
      try {
        const response = await axios.get('https://occurances-digital-book.onrender.com/incidents', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        setIncidents(response.data);
      } catch (error) {
        console.error('Error fetching incidents', error);
      }
    };

    fetchIncidents();
  }, []);  
  return (
    <div className='mainContent'>
      {/* <CreateIncident /> */}
      {incidents.map(incident => (
        <Card key={incident.incident_id} incident={incident} />
      ))}
    </div>
  );
}

export default MainContent;
