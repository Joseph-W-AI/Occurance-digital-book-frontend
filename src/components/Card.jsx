import React from "react";
import "./Card.scss";

 const Card=()=>{
  return (
    <div className="card">
    <div>
    <h1 className="title">Child Rape</h1>
    </div>
   <div className="content-top">
      <div className="name">
      <h4 >Accused </h4>
      <span>:</span>
      <p className="names">Peter Onyang</p>
      </div>
      <div className="name">
      <h4 >Victim </h4>
      <span>:</span>
      <p className="names">Peter Onyang</p>
      </div>
      <div className="name">
      <h4 >Reported By </h4>
      <span>:</span>
      <p className="names">Peter Onyang</p>
      </div>
      <div className="name">
      <h4 >Location</h4>
      <span>: </span>
      <p className="names">Peter Onyang</p>
      </div>
      <div className="name">
      <h4 >Date </h4>
      <span>:</span>
      <p className="names">12/01/2024</p>
      </div>
      
   </div>
      
    </div>
  );
}


export default Card;