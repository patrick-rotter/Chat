import React from "react";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import { Conversation } from "./Conversation";
import { contacts } from "../../demo/contacts"

interface Props {}

export const Messages: React.FC<Props> = () => {
  return (
    <div className="messages-container">
      <div className="text-container">
        <div className="messages-text">Messages</div>
        <div className="archive-btn">
          {/* TODO: Make icon smaller */}
          <MoveToInboxIcon />
          &nbsp; Archive Chat
        </div>
      </div>
      <div className="scroll-msg-container">

      {contacts.map((contact) => (
        <>
        <Conversation {...contact} />
        <hr className="hr-seperator"></hr>
        </>
      ))}
      </div> 
    </div>
  );
};
