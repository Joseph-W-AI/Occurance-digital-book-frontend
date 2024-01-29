import React from "react";
import "./Card.scss";

const Card = ({ incident }) => {
  return (
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
  );
};

export default Card;
