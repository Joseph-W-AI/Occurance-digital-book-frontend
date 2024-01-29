import React from "react";
import Avatar from "../assets/Avatar.png";
import "./SideProfile.scss";

function SideProfile() {
  // Retrieve username and email from local storage
  const username = localStorage.getItem('username');
  const email = localStorage.getItem('email');

  return (
    <div className="sideProfile">
      <div className="SideImage">
        <img src={Avatar} alt="avatar" />
      </div>
      <div className="leftprofile">
        <p className="Profilename">{username}</p>
        <p className="username">{`@${username}`}</p>
        <p className="email">{email}</p>
      </div>
    </div>
  );
}

export default SideProfile;
