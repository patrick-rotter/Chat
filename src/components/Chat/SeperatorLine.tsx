import React from "react";

interface Props {}

export const SeperatorLine: React.FC<Props> = () => {
  return (
    <div className="sep-line-container">
      <hr className="hr-seperator"></hr>
      <div className="sep-line-text">Today</div>
      <hr className="hr-seperator"></hr>
    </div>
  );
};
