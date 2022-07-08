import React from "react";
import { StarredChatMessage } from "./StarredChatMessage";

interface Props {}

export const StarredMessages: React.FC<Props> = () => {
  let demoMsg = {
    isUserMessage: true,
    msg: "Max ist ein lieber Kerl. Manchmal.",
    author: "Patrick",
    date: "21 Jan 2021 22:21",
  };

  let demoMsg2 = {
    isUserMessage: false,
    msg: "Max ist ein lieber Kerl. Manchmal.",
    author: "Patrick",
    date: "21 Jan 2021 22:21",
  };
  return (
    <div className="starred-messages-container">
      <div className="personal-text-container">
        <div className="subtext-container">
          <div className="text-media">Starred Messages</div>
        </div>
        <div className="text-see-all">See all</div>
      </div>

      <div className="scroll-starred-container">
        <StarredChatMessage
          isUserMessage={demoMsg.isUserMessage}
          msg={demoMsg.msg}
          author={demoMsg.author}
          date={demoMsg.date}
        />
        <StarredChatMessage
          isUserMessage={demoMsg2.isUserMessage}
          msg={demoMsg2.msg}
          author={demoMsg2.author}
          date={demoMsg2.date}
        />
        <StarredChatMessage
          isUserMessage={demoMsg.isUserMessage}
          msg={demoMsg.msg}
          author={demoMsg.author}
          date={demoMsg.date}
        />
        <StarredChatMessage
          isUserMessage={demoMsg2.isUserMessage}
          msg={demoMsg2.msg}
          author={demoMsg2.author}
          date={demoMsg2.date}
        />
        <StarredChatMessage
          isUserMessage={demoMsg.isUserMessage}
          msg={demoMsg.msg}
          author={demoMsg.author}
          date={demoMsg.date}
        />
        <StarredChatMessage
          isUserMessage={demoMsg2.isUserMessage}
          msg={demoMsg2.msg}
          author={demoMsg2.author}
          date={demoMsg2.date}
        />
      </div>
    </div>
  );
};
