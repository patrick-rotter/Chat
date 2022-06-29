import React from "react";

type Props = {
    isUserMessage: boolean,
    msg: string,
    author: string,
    date: string
}

export const StarredChatMessage: React.FC<Props> = (props) => {


  return (
    <div className="starred-chat-message-container">
      <div className={props.isUserMessage ? "user-chat-message" : "partner-chat-message"}>
        {props.msg}
      </div>
      <div  style={{textAlign: !props.isUserMessage ? "right" : "left"}} className="starred-message-info">
        {props.author} &#183; {props.date}
      </div>
    </div>
  );
};
