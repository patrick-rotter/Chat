import React from "react";

type Props = {
  icon: any;
  convPartner: string;
  message: string;
  lastMessage: string;
  unread: number;
};

export const Conversation: React.FC<Props> = (props) => {
  return (
    <div>
      <div className="conversation-container">
        <div className="chat-partner-icon">{props.icon}</div>
        <div className="flex-container">
          <div className="conv-partner-container">
            <div className="conv-partner">{props.convPartner}</div>
            <div className="conv-msg">{props.message}</div>
          </div>
          <div className="conv-info-container">
            <div className="last-msg">{props.lastMessage}</div>
            <div className="unread-msgs">{props.unread}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
