import React, { useState, useRef } from 'react'
import { Paperclip, Smile, Mic, Send } from 'react-feather'
import { AttachFile } from './AttachFile'
import { useClickAway } from 'react-use'

interface Props {}

export const ChatInput: React.FC<Props> = () => {
  const [showAttach, setShowAttach] = useState(false)
  const [input, setInput] = useState('')

  // Detects a click outside the parent div and closes the window
  const ref = useRef(null)
  useClickAway(ref, () => {
    setShowAttach(false)
  })

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
      <div className="attach-btn" onClick={handleClick} ref={ref} >
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
