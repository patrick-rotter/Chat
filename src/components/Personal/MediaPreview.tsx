import React from "react";

type Props = {
  url: string;
  alt: string;
};

export const MediaPreview: React.FC<Props> = (props) => {
  return (
    <div className="img-container">
      <img className="media-img" src={props.url} alt={props.alt} />
    </div>
  );
};
