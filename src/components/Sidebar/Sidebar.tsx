import React, { FC } from "react";
import ChatIcon from "@mui/icons-material/Chat";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import PhoneIcon from "@mui/icons-material/Phone";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import InboxIcon from "@mui/icons-material/Inbox";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

const Sidebar: FC = () => {
  let notificationCount = 3;

  return (
    <div className="sidebar-panel">
      <div className="spacer">x</div>
      <div className="icon-container">
        <ChatIcon className="icon" />
        <CalendarMonthIcon className="icon" />
        <VideoCameraFrontIcon className="icon" />
        <PhoneIcon className="icon" />
        <PeopleAltIcon className="icon" />
        <InboxIcon className="icon" />
      </div>
      <div className="add-bell-container">
        <NotificationsNoneIcon className="icon bell-icon" />
        {notificationCount !== 0 && (
          <div className="notification-count">{notificationCount}</div>
        )}
        <div className="new-chat">+</div>
      </div>
    </div>
  );
};

export default Sidebar;
