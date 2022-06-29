import React from "react";
import { MediaPreview } from "./MediaPreview";

interface Props {}

export const Media: React.FC<Props> = () => {
  let mediaCount = 20;

  /* TODO: Make image preview dynamic: Max. 2 images, rest is a placeholder
  with number (18+); 
  Show only 1 or 2 imgs or placeholder text when there is media;
  How to make container look like original? */
  let url = "./media/beach.jpg";
  let alt = "Beach";

  return (
    <div className="media-container">
      <div className="personal-text-container">
        <div className="subtext-container">
          <div className="text-media">Media</div>
          <div className="media-count">{mediaCount}</div>
        </div>
        <div className="text-see-all">See all</div>
      </div>
      <div className="media-img-container">
        <MediaPreview url={url} alt={alt} />
        <MediaPreview url={url} alt={alt} />
        <MediaPreview url={url} alt={alt} />
      </div>
      <hr className="hr-seperator"></hr>
    </div>
  );
};