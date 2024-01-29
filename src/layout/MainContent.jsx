import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import './MainContent.scss';
import CreateIncident from '../components/CreateIncident'

const MainContent = () => {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    // Make a GET request to fetch incidents
    axios.get('http://127.0.0.1:5000/incidents')
      .then(response => {
        setIncidents(response.data);
      })
      .catch(error => {
        console.error('Error fetching incidents', error);
      });
  }, []);  // Empty dependency array means this effect runs once when the component mounts

  return (
    <div className='mainContent'>

      
      <CreateIncident/>
      {incidents.map(incident => (
        <Card key={incident.incident_id} incident={incident} />
      ))}
    </div>
  );
}

export default MainContent;
