import React from 'react';
import SideNav from '../layout/SideNav';
import Navbar from '../layout/Navbar';
import './Reports.scss'

const IncidentTable = ({ incidents, onStatusChange, onDelete }) => {
  return (
   <div className="table-container">
    <div className="nav">
        <Navbar/>
    </div>
      <div className="right-table">
      <div className="side-nav">
      <SideNav/>
      </div>
    <div className="main-table">
    <h2>Incident List</h2>
    <table>
      <thead>
        <tr>
          <th>Incident Name</th>
          <th>Accused</th>
          <th>Victim</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {incidents.map((incident) => (
          <tr key={incident.id}>
            <td>{incident.name}</td>
            <td>{incident.accused}</td>
            <td>{incident.victim}</td>
            <td>
              <span
                style={{
                  color: incident.status === 'completed' ? 'green' : 'red',
                  cursor: 'pointer',
                }}
                onClick={() => onStatusChange(incident.id)}
              >
                {incident.status}
              </span>
            </td>
            <td>
              <button onClick={() => onDelete(incident.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
      </div>
   </div>
  );
};

export default IncidentTable;
