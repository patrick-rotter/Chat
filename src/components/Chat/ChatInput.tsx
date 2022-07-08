import React, { useState } from 'react'
import { Paperclip, Smile, Mic, Send } from 'react-feather'
import { AttachFile } from './AttachFile'

interface Props {}

export const ChatInput: React.FC<Props> = () => {
  const [showAttach, setShowAttach] = useState(false)

  const handleClick = (): void => {
    setShowAttach((prevShowInsert) => !prevShowInsert)
  }

  return (
    <div className="chat-input-container">
      <AttachFile onScreen={showAttach} />
      <div className="attach-btn" onClick={handleClick}>
        <Paperclip />
      </div>
      <form>
        <input
          className="message-input"
          type="text"
          placeholder="Write a message for Rehan..."
        />
      </form>
      <div className="btn-container">
        <Smile />
        <Mic />
        <div className="send-btn">
          <Send />
        </div>
      </div>
    </div>
  )
}
