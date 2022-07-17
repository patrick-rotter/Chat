import React from 'react'
import { useStore } from '../../store'
import { Contact } from '../../global/types'
import useTimeParts from '../../hooks'

export const Conversation: React.FC<Contact> = (props) => {
  const { day, monthAsNumber: month } = useTimeParts(props.lastMsgDate)
  const selectChatPartnerFromId = useStore(
    (state) => state.selectChatPartnerFromId
  )

  return (
    <div>
      <div
        className="conversation-container"
        onClick={() => selectChatPartnerFromId(props.userId)}
      >
        <div
          style={{ backgroundColor: props.color }}
          className="chat-partner-icon"
        >
          {props.icon}
        </div>
        <div className="flex-container">
          <div className="conv-partner-container">
            <div className="conv-partner">
              {props.fName} {props.lName}
            </div>
            <div className="conv-msg">{props.lastMsg}</div>
          </div>
          <div className="conv-info-container">
            <div className="last-msg">
              {day}.{month}
            </div>
            {props.unread !== 0 && (
              <div className="unread-msgs">{props.unread}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
