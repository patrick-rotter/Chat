import React from "react";
import { File } from "../../global/types";
import { formatBytes } from "../../utils/util";
import { turnFormatIntoIcon } from "../../utils/util";

export const FilePreview: React.FC<File> = (props) => {
  const day = props.time.getDay();
  const month = props.time.toLocaleString("default", { month: "short" });
  const year = props.time.getFullYear();

  const size = formatBytes(props.size, 1);
  const icon = turnFormatIntoIcon(props.format)

  return (
    <div>
      <div className="file-preview-container">
        <div className="file-icon">{icon}</div>
        <div className="file-info-container">
          <div className="filename">{props.name}</div>
          <div className="file-stats">
            {size} &#183; {day} {month} {year}
          </div>
        </div>
      </div>
    </div>
  );
};
