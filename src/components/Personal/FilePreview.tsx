import React from "react";

// TODO: Change types -> icon to mui-type, size to size in bytes, date to Date
type FileInfo = {
    icon: any,
    name: string,
    size: string,
    date: string
}

export const FilePreview: React.FC<FileInfo> = (props) => {
  return (
    <div>
      <div className="file-preview-container">
        <div className="file-icon">{props.icon}</div>
        <div className="file-info-container">
          <div className="filename">{props.name}</div>
          <div className="file-stats">{props.size} &#183; {props.date}</div>
        </div>
      </div>
      
    </div>
  );
};
