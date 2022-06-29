import React from "react";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import SentimentVerySatisfiedOutlinedIcon from "@mui/icons-material/SentimentVerySatisfiedOutlined";
import KeyboardVoiceOutlinedIcon from "@mui/icons-material/KeyboardVoiceOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

interface Props {}

export const ChatInput: React.FC<Props> = () => {
  return (
    <div className="chat-input-container">
      <div className="attach-btn">
        <AttachFileOutlinedIcon />
      </div>
      <form>
        <input className="message-input" type="text" placeholder="Write a message for Rehan..." />
      </form>
      <div className="btn-container">
        <SentimentVerySatisfiedOutlinedIcon />
        <KeyboardVoiceOutlinedIcon />
        <div className="send-btn">
          <SendOutlinedIcon />
        </div>
      </div>
    </div>
  );
};
