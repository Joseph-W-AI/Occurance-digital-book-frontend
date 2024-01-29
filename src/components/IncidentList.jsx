import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Incident from './Incidents';
const token = localStorage.getItem('token');

const IncidentsList = () => {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    const fetchIncidents = async () => {
        try {
          const response = await axios.get('http://127.0.0.1:5000/incidents', {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          });
      
          // Use response.data instead of response
          setIncidents(response.data);
        } catch (error) {
          console.error('Error fetching incidents', error);
        }
      };

    fetchIncidents();
  }, []);

  return (
    <div className="incidents-list">
      {incidents.map((incident, index) => (
        <Incident key={index} incident={incident} />
      ))}
    </div>
  );
};

export default IncidentsList;
