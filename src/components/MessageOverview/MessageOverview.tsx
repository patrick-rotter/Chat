import React from 'react'
import { Messages } from './Messages'
import { SearchBar } from './SearchBar'
import { Stories } from './Stories'
import '../../styles/message-overview.css'

export const MessageOverview: React.FC = () => {
  return (
    <div className="msg-overview-panel">
      <SearchBar />
      <Stories />
      <Messages />
    </div>
  )
}
