import React, { useState, useEffect } from 'react';
import axios from 'axios';
import IncidentTable from './Reports';
import './IncidentReports.scss'
const IncidentReports = () => {
  const [incidents, setIncidents] = useState([]);
  const [deletionSuccess, setDeletionSuccess] = useState('');

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
  }, [token, deletionSuccess]);

  const handleStatusChange = (incident_id) => {
    console.log('Status change requested for incident:', incident_id);
  };

  const handleDelete = async (incident_id) => {
    try {
      await axios.delete(`https://occurances-digital-book.onrender.com/incidents/${incident_id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      setIncidents((prevIncidents) => prevIncidents.filter((incident) => incident.id !== incident_id));
      setDeletionSuccess('Incident deleted successfully');
      console.log('Incident deleted successfully');
    } catch (error) {
      console.error('Error deleting incident', error);
    }
  };

  return (
    <div>
       {deletionSuccess && <div className='success-message'>{deletionSuccess}</div>}
      <IncidentTable incidents={incidents} onStatusChange={handleStatusChange} onDelete={handleDelete} />
    </div>
  );
};

export default IncidentReports;
