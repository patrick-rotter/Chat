import React from 'react'
import { useStore } from '../../store'
import { Contact } from '../../global/types'

export const Conversation: React.FC<Contact> = (props) => {
  const day = props.lastMsgDate.getDay()
  const month = props.lastMsgDate.getMonth()

  // Extract the select method from Zustand - selects a current chat partner (based on userId)
  const { selectChatPartnerFromId } = useStore()

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
