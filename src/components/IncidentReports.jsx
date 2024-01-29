import React, { useState, useEffect } from 'react';
import axios from 'axios';
import IncidentTable from './Reports';

const IncidentReports = () => {
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
console.log(response.data);
        setIncidents(response.data);
      } catch (error) {
        console.error('Error fetching incidents', error);
      }
    };

    fetchIncidents();
  }, [token]);

  const handleStatusChange = (incidentId) => {
    // Implement the logic to change the status
    console.log('Status change requested for incident:', incidentId);
  };

  const handleDelete = (incidentId) => {
    // Implement the logic to delete the incident
    console.log('Delete requested for incident:', incidentId);
  };

  return (
    <div>
      
      <IncidentTable incidents={incidents} onStatusChange={handleStatusChange} onDelete={handleDelete} />
    </div>
  );
};

export default IncidentReports;
