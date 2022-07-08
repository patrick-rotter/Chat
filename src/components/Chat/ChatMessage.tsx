import React from "react";
import { ChatMsg } from "../../global/types"

export const ChatMessage: React.FC<ChatMsg> = (props) => {
  const day = props.time.getDay();
  const month = props.time.toLocaleString("default", { month: "short" });
  const year = props.time.getFullYear();
  const hour = props.time.getHours();
  const min = props.time.getMinutes();

  return (
    <div
      className={
        props.userIsAuthor
          ? "chat-msg-container right-aligned"
          : "chat-msg-container"
      }
    >
      <div
        className={props.userIsAuthor ? "user-chat-msg" : "partner-chat-msg"}
      >
        {props.text}
      </div>
      <div
        style={{ textAlign: !props.userIsAuthor ? "left" : "right" }}
        className="msg-date"
      >
        {day} {month} {year} &nbsp; {hour}:{min}
      </div>
    </div>
  );
};
