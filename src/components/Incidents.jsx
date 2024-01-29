import React from "react";
import "./Incidents.scss";
import Navbar from "../layout/Navbar";
import SideNav from "../layout/SideNav";

 const Incident=({ incident })=> {
  return (
 <div className="incident-container">
     <div className="nav">
    <Navbar/>
      </div>
    <div className='main'>
<div className="side-nav">
<SideNav />
</div>
    <div className="card">
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
      </div>
    </div>
    </div>
 </div>
  );
}

export default Incident