import React from 'react'
import { Contact } from '../../global/types'

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

export const Story: React.FC<Contact> = (props) => {
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
