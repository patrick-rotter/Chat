import React from 'react'
import { Contact } from '../../global/types'

export const Story: React.FC<Contact> = (props) => {
  const colors = [
    'lightblue',
    'lightcoral',
    'lightcyan',
    'lightsalmon',
    'lightgreen',
    'lightpink',
    'lightseagreen',
    'lightskyblue'
  ]
  const color = colors[Math.floor(Math.random() * colors.length)]

  return (
    <div className="single-story-container">
      <div className="story-icon" style={{ backgroundColor: color }}>
        {props.stories[0]}
      </div>
      <div className="story-author">{props.fName}</div>
    </div>
  )
}
