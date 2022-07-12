import React from 'react'
import { useStoreChatPartner } from '../../store/store'

type Props = {
  userId: number
  pic: any
  fName: string
  lName: string
  lastMsg: string
  lastMsgDate: Date
  unread: number
}

export const Conversation: React.FC<Props> = (props) => {
  const day = props.lastMsgDate.getDay()
  const month = props.lastMsgDate.getMonth()

  // Emoji array
  const icons = [
    '\u{1F984}',
    '\u{1F970}',
    '\u{1F61C}',
    '\u{1F914}',
    '\u{1F634}',
    '\u{1F974}',
    '\u{1F973}',
    '\u{1F60E}',
    '\u{1F608}',
    '\u{1F47D}',
    '\u{1F63D}'
  ]
  // Pick a random emoji (as a placeholder icon)
  const icon = icons[Math.floor(Math.random() * icons.length)]

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

  // Extract the select method from Zustand - selects a current chat partner (based on userId)
  const { select } = useStoreChatPartner()

  return (
    <div>
      <div
        className="conversation-container"
        onClick={() => select(props.userId)}
      >
        <div style={{ backgroundColor: color }} className="chat-partner-icon">
          {icon}
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
