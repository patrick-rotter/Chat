import React from 'react'
import { ChatHistory } from './ChatHistory'
import { ChatInput } from './ChatInput'
import { ChatPartner } from './ChatPartner'
import '../../styles/chat.css'

export const Chat: React.FC = () => {
  return (
    <div className="chat-panel">
      <ChatPartner />
      <ChatHistory />
      <ChatInput />
    </div>
  )
}
