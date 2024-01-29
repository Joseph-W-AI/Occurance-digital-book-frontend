import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Incident from './Incidents';
import SideNav from '../layout/SideNav';
import Navbar from '../layout/Navbar';
import './IncidentList.scss'


const token = localStorage.getItem('token');

const IncidentsList = () => {
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
       <div className="nav-main">
        <Navbar />
      </div>
     <div className="items-lower">
     <div className="side-nav">
          <SideNav />
        </div>
      <div className="incident-lists-cont">
      {incidents.map((incident, index) => (
        <Incident key={index} incident={incident} />
      ))}
      </div>
     </div>
    </div>
  );
};

export default IncidentsList;
