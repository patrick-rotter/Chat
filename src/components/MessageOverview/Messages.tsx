import React from "react";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import { Conversation } from "./Conversation";

interface Props {}

/* TODO: atm longer messages can't be handled
solution -> cut off msg after certain length in setMsg (state)
and concatenate "..."
*/
// TODO: Exclude text Messages from scrolling

let conv = {
  icon: "A",
  convPartner: "Oliver Merzeder",
  message:
    "Hi, dies ist ein Test.",
  lastMessage: "09:10",
  unread: 3,
};

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
      <Conversation
        convPartner={conv.convPartner}
        icon={conv.icon}
        message={conv.message}
        lastMessage={conv.lastMessage}
        unread={conv.unread}
      />
      <hr className="hr-seperator"></hr>
      <Conversation
        convPartner={conv.convPartner}
        icon={conv.icon}
        message={conv.message}
        lastMessage={conv.lastMessage}
        unread={conv.unread}
      />
      <hr className="hr-seperator"></hr>
      <Conversation
        convPartner={conv.convPartner}
        icon={conv.icon}
        message={conv.message}
        lastMessage={conv.lastMessage}
        unread={conv.unread}
      />
      <hr className="hr-seperator"></hr>
      <Conversation
        convPartner={conv.convPartner}
        icon={conv.icon}
        message={conv.message}
        lastMessage={conv.lastMessage}
        unread={conv.unread}
      />
      <hr className="hr-seperator"></hr>
      <Conversation
        convPartner={conv.convPartner}
        icon={conv.icon}
        message={conv.message}
        lastMessage={conv.lastMessage}
        unread={conv.unread}
      />
      <hr className="hr-seperator"></hr>
      <Conversation
        convPartner={conv.convPartner}
        icon={conv.icon}
        message={conv.message}
        lastMessage={conv.lastMessage}
        unread={conv.unread}
      />
      <hr className="hr-seperator"></hr>
      </div>

    

      
    </div>
  );
};
