import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import CreateIncident from '../components/CreateIncident';
import './MainContent.scss';

const MainContent = () => {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    const fetchIncidents = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/incidents', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxfQ.yQ0a3wDcLLSlckbZowXTgM3gjsSs8uHhhuFKJ02RXvg',
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
