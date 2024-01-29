import React, { useState, useEffect } from 'react';
import Incident from './Incident';

const IncidentsList = () => {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/incidents', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        });

        if (response.ok) {
          const data = await response.json();
          setIncidents(data);
        } else {
          console.error('Error fetching incidents:', response.statusText);
        }
      } catch (error) {
        console.error('Error during fetch:', error);
      }
    };

    fetchData();
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
