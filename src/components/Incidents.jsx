import React from "react";
import "./Incidents.scss";
import Navbar from "../layout/Navbar";
import SideNav from "../layout/SideNav";

const Incident = ({ incident }) => {
  if (!incident || Object.keys(incident).length === 0) {
    return <p>No incident data available.</p>;
  }

  return (
    <div className="incident-container">
     
      <div className='main-cont'>
        
        <div className="main-body">
        <div className="card-incident">
          <div>
            <h1 className="title">{incident.name}</h1>
          </div>
          <div className="content-top">
            <div className="name">
              <h4>Accused </h4>
              <span>:</span>
              <p className="names">{incident.accused}</p>
            </div>
            <div className="name">
              <h4>Victim </h4>
              <span>:</span>
              <p className="names">{incident.victim}</p>
            </div>
            <div className="name">
              <h4>Reported By </h4>
              <span>:</span>
              <p className="names">{incident.reported_by}</p>
            </div>
            <div className="name">
              <h4>Location</h4>
              <span>: </span>
              <p className="names">{incident.location}</p>
            </div>
            <div className="name">
              <h4>Date </h4>
              <span>:</span>
              <p className="names">{incident.date}</p>
            </div>
            <div className="name">
              <h4>Incident </h4>
              <span>:</span>
              <p className="names">{incident.message}</p>
            </div>
            <div className="name">
              <h4>Status </h4>
              <span>:</span>
              <p className="names">{incident.status}</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Incident;
