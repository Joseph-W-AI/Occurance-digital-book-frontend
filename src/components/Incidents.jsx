import React from "react";
import "./Incidents.scss";

 const Incident=()=> {
  return (
    <div className="card">
    <div>
    <h1 className="title">Child Rape</h1>
    </div>
   <div className="content-top">
   <h4>Accused: <span>Peter Onyang</span></h4>
    <h4>Victim: <span>Peter Onyang</span></h4>
    <h4>Reported By: <span>Peter Onyang</span></h4>
    <h4>Date: <span>Peter Onyang</span></h4>
    <h4>Location: <span>Peter Onyang</span></h4>
   </div>
      
      <p>
        Nike Dunk High is a high-top version of the classic Nike Dunk sneaker,
        featuring a padded collar for added support and comfort.
      </p>
     
      <div className="button-box">
        <button className="purchase">Purchase</button>
      </div>
    </div>
  );
}

export default Incident