import React, { useState, useRef } from 'react'
import { Paperclip, Smile, Mic, Send } from 'react-feather'
import { AttachFile } from './AttachFile'
import { useClickAway } from 'react-use'

export const ChatInput: React.FC = () => {
  const [showAttach, setShowAttach] = useState(false)
  const [input, setInput] = useState('')

  // Detects a click outside the parent div and closes the window
  const ref = useRef<HTMLDivElement | null>(null)
  useClickAway(ref, () => {
    setShowAttach(false)
  })

  const handleClick = () => {
    setShowAttach((prevShowInsert) => !prevShowInsert)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e?.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(input)
    setInput('')
    e.preventDefault()
  }

  return (
    <div className="chat-input-container">
      <div className="attach-btn" onClick={handleClick} ref={ref}>
        <Paperclip />
        <AttachFile onScreen={showAttach} />
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
