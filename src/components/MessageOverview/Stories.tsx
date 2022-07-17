import React, { useRef } from 'react'
import { contacts } from '../../fixtures/contacts'
import { Story } from './Story'
import useDraggableScroll from 'use-draggable-scroll'

interface Props {}

export const Stories: React.FC<Props> = () => {
  // Allows dragging for horizontal scroll
  const ref = useRef(null)
  const { onMouseDown } = useDraggableScroll(ref)

  return (
    <div className="stories-container">
      <div className="stories-text-container">
        <div className="stories-text">Stories</div>
        <div className="more-btn">More &nbsp; &#62;</div>
      </div>
      <div
        className="all-stories-scrollable"
        ref={ref}
        onMouseDown={onMouseDown}
      >
        <div className="single-story-container">
          <div className="add-story-btn">+</div>
          <div className="text-add-story">Add</div>
          <div className="story-author">Story</div>
        </div>
        {/* Render a contact's stories if they have any */}
        {contacts.map(
          (contact) => contact.stories.length !== 0 && <Story {...contact} />
        )}
      </div>
    </div>
  )
}
