import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import './MainContent.scss';
const token = localStorage.getItem('token');

const MainContent = () => {
  const [incidents, setIncidents] = useState([]);

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
  }, []);  // Empty dependency array means this effect runs once when the component mounts

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
