import React from 'react'
import { ChatMsg } from '../../global/types'

export const StarredChatMessage: React.FC<ChatMsg> = (props) => {
  const author = props.userIsAuthor ? 'You' : props.author

  const day = props.time.getDay()
  const month = props.time.toLocaleString('default', { month: 'short' })
  const year = props.time.getFullYear()
  const hour = props.time.getHours()
  const min = props.time.getMinutes()

  return (
    <div className="starred-chat-msg-container">
      <div
        className={
          props.userIsAuthor ? 'starred-user-msg' : 'starred-partner-msg'
        }
      >
        {props.text}
      </div>
      <div
        style={{ textAlign: !props.userIsAuthor ? 'left' : 'right' }}
        className="starred-msg-info"
      >
        {author} &#183; {day} {month} {year} &nbsp; {hour}:{min}
      </div>
    </div>
  )
}
