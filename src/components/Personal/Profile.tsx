import React from "react";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

interface Props {}

export const Profile: React.FC<Props> = () => {
  let userName = "Patrick";
  let status = "Busy";

// TODO: Rotate settings icon counter-clockwise and open the settings menu

  return (
    <div className="profile-container">
      <div className="name-pic-container">
        <div className="profile-picture">&#128578;</div>
        <div className="user-container">
          <div className="user-name">{userName}</div>
          <div className="user-status">{status}</div>
        </div>
      </div>
      <SettingsOutlinedIcon className="settings-btn" />
    </div>
  );
};
