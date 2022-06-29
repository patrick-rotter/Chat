import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import PhoneIcon from "@mui/icons-material/Phone";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface Props {}

export const ChatPartner: React.FC<Props> = () => {
  let chatPartner = "Rehan Wangsaff";
  let online = true;

  // TODO: Hover tooltips for buttons

  return (
    <div className="chat-partner">
      <div className="chat-partner-container">
        <div className="contact-info">
          <div className="contact-picture">&#128571;</div>
          <div className="name-status-container">
            <div className="contact-name">{chatPartner}</div>
            <div className="contact-status">{online ? "Online" : ""}</div>
          </div>
        </div>
        <div className="contact-btns">
          <div className="video-container">
            <VideoCameraFrontIcon className="contact-btn" />
            <div className="tooltip">Video Chat</div>
          </div>
          <div className="phone-container">
            <PhoneIcon className="contact-btn" />
            <div className="tooltip">Voice Chat</div>
          </div>
          <div className="search-container">
            <SearchIcon className="contact-btn" />
            <div className="tooltip">Search</div>
          </div>
          <div className="dots-container">
            <MoreVertIcon className="more-btn" />
            <div className="tooltip">More</div>
          </div>
        </div>
      </div>
    </div>
  );
};
