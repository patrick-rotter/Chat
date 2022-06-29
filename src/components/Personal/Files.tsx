import React from "react";
import { FilePreview } from "./FilePreview";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";

interface Props {}

export const Files: React.FC<Props> = () => {
  let fileCount = 25;

  // Save files in array
  let fileInfo = {
    icon: <ArticleOutlinedIcon />,
    name: "CurriculumVitae.pdf",
    size: "3.7MB",
    date: "22 Jan 2021",
  };

  return (
    <div className="files-container">
      <div className="personal-text-container">
        <div className="subtext-container">
          <div className="text-media">Files</div>
          <div className="media-count">{fileCount}</div>
        </div>
        <div className="text-see-all">See all</div>
      </div>

      <FilePreview
        icon={fileInfo.icon}
        name={fileInfo.name}
        date={fileInfo.date}
        size={fileInfo.size}
      />
      <hr className="hr-seperator"></hr>

      <FilePreview
        icon={fileInfo.icon}
        name={fileInfo.name}
        date={fileInfo.date}
        size={fileInfo.size}
      />
      <hr className="hr-seperator"></hr>

      <FilePreview
        icon={fileInfo.icon}
        name={fileInfo.name}
        date={fileInfo.date}
        size={fileInfo.size}
      />
      <hr className="hr-seperator"></hr>

      <FilePreview
        icon={fileInfo.icon}
        name={fileInfo.name}
        date={fileInfo.date}
        size={fileInfo.size}
      />
      <hr className="hr-seperator"></hr>
      
    </div>
  );
};
