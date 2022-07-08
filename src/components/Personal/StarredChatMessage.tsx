import React from "react";

type Props = {
  isUserMessage: boolean;
  msg: string;
  author: string;
  date: string;
};

export const StarredChatMessage: React.FC<Props> = (props) => {
  return (
    <div className="starred-chat-msg-container">
      <div
        className={
          props.isUserMessage ? "starred-user-msg" : "starred-partner-msg"
        }
      >
        {props.msg}
      </div>
      <div
        style={{ textAlign: !props.isUserMessage ? "left" : "right" }}
        className="starred-msg-info"
      >
        {props.author} &#183; {props.date}
      </div>
    </div>
  );
};
