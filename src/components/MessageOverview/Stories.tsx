import React from "react";

interface Props {}

export const Stories: React.FC<Props> = () => {
  // TODO: implement react draggable instead of scrollbar
  // TODO: different story colors, text blabla -> put into array

  return (
    <div className="stories-container">
      <div className="stories-text-container">
        <div className="stories-text">Stories</div>
        <div className="more-btn">More &nbsp; &#62;</div>
      </div>
      <div className="fade-out-div">
        <div className="all-stories-scrollable">
          <div className="single-story-container">
            <div className="add-story-btn">+</div>
            <div className="text-add-story">Add</div>
            <div className="story-author">Story</div>
          </div>
          <div className="single-story-container">
            <div className="add-story-btn">+</div>
            <div className="story-author">Oliver</div>
          </div>
          <div className="single-story-container">
            <div className="add-story-btn">+</div>
            <div className="story-author">Max</div>
          </div>
          <div className="single-story-container">
            <div className="add-story-btn">+</div>
            <div className="story-author">Filip</div>
          </div>
          <div className="single-story-container">
            <div className="add-story-btn">+</div>
            <div className="story-author">Thomas</div>
          </div>
          <div className="single-story-container">
            <div className="add-story-btn">+</div>
            <div className="story-author">Dominic</div>
          </div>
        </div>
      </div>
    </div>
  );
};
