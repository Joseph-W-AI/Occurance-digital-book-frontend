import React from "react";
import Avatar from "../assets/Avatar.png";
import "./SideProfile.scss";

function SideProfile() {
  return (
    <div className="sideProfile">
      <div className="SideImage">
        <img src={Avatar} alt="avatar" />{" "}
      </div>
      <div className="leftprofile">
        <p className="Profilename">Angela Lee</p>
        <p className="username">@angelalee</p>
      </div>
    </div>
  );
}

export default SideProfile;