import React from "react";
import "./Settings.css";
import { CgProfile } from "react-icons/cg";
import { MdArrowForwardIos } from "react-icons/md";
import { BiNotification } from "react-icons/bi";

const Settings = () => {
  return (
    <div className="card">
      <div className="settings-profile-section">
        <CgProfile style={{ fontSize: "30px", color: "#a18aff" }} />
        <p style={{ fontSize: "20px", color: "#a18aff" }}>Profile</p>
      </div>

      <hr className="settings-custom-divider" />

      <div className="profile-actions">
        <div className="edit-profile">
          <p style={{ fontSize: "17px" }}>Edit Profile</p>
          <MdArrowForwardIos style={{ fontSize: "20px" }} />
        </div>

        <div className="change-password">
          <p style={{ fontSize: "17px" }}>Change password</p>
          <MdArrowForwardIos style={{ fontSize: "20px" }} />
        </div>

        <div className="privacy">
          <p style={{ fontSize: "17px" }}>Privacy</p>
          <MdArrowForwardIos style={{ fontSize: "20px" }} />
        </div>
      </div>

      <div className="notification-section">
        <BiNotification style={{ fontSize: "30px", color: "#a18aff" }} />
        <p style={{ fontSize: "20px", color: "#a18aff" }}>Notification</p>
      </div>

      <hr className="settings-custom-divider-2" />
    </div>
  );
};

export default Settings;
