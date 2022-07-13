import React, { useState } from 'react'
import { Paperclip, Smile, Mic, Send } from 'react-feather'
import { AttachFile } from './AttachFile'

interface Props {}

export const ChatInput: React.FC<Props> = () => {
  const [showAttach, setShowAttach] = useState(false)
  const [input, setInput] = useState('')

  const handleClick = (): void => {
    setShowAttach((prevShowInsert) => !prevShowInsert)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e?.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    console.log(input)
    setInput('')
    e.preventDefault()
  }

  return (
    <div className="chat-input-container">
      <AttachFile onScreen={showAttach} />
      <div className="attach-btn" onClick={handleClick}>
        <Paperclip />
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          className="message-input"
          type="text"
          placeholder="Write a message for Rehan..."
          value={input}
          onChange={handleChange}
        />
      </form>
      <div className="btn-container">
        <Smile />
        <Mic />
        <div className="send-btn">
          <Send className="send-icon" />
        </div>
      </div>
    </div>
  )
}
