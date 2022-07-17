import React, { useState, useRef } from 'react'
import { ChatMsg } from '../../global/types'
import { MoreHorizontal, Smile } from 'react-feather'
import { ContextModal } from './ContextModal'
import { useClickAway } from 'react-use'
import useTimeParts from '../../hooks'

export const ChatMessage: React.FC<ChatMsg> = (props) => {
  const { day, monthAsText: month, year, hour, min } = useTimeParts(props.time)

  const [isHovering, setIsHovering] = useState(false)
  const [showModal, setShowModal] = useState(false)

  // Detects a click outside the parent div and closes the window
  const ref = useRef<HTMLDivElement | null>(null)
  useClickAway(ref, () => {
    setShowModal(false)
  })

  const handleMouseOver = () => {
    setIsHovering(true)
  }

  const handleMouseOut = () => {
    setIsHovering(false)
  }

  const handleClick = () => {
    setShowModal((prevShowModal) => !prevShowModal)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  /* Returns a chat bubble with a different style for user msgs
     or chat partner msgs;
     Could have been solved with ternary operator only, 
     but emoji/3-dot context menu alignment would not be possible */

  return (
    <>
      {props.userIsAuthor ? (
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <div className="chat-msg-container right-aligned">
            <div className="context-menu-container" ref={ref}>
              {isHovering && (
                <div className="context-menu">
                  <div>
                    <MoreHorizontal
                      className="context-icon"
                      onClick={handleClick}
                    />
                  </div>
                  <Smile className="context-icon" />
                </div>
              )}
              {showModal && (
                <ContextModal msg={props} closeModal={closeModal} />
              )}
            </div>
            <div className="user-chat-msg">{props.text}</div>
          </div>
          <div style={{ textAlign: 'right' }} className="msg-date">
            {day} {month} {year} &nbsp; {hour}:{min}
          </div>
        </div>
      ) : (
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <div className="chat-msg-container">
            <div className="partner-chat-msg">{props.text}</div>
            <div
              style={{ justifyContent: 'start' }}
              className="context-menu-container"
              ref={ref}
            >
              {isHovering && (
                <div className="context-menu">
                  <Smile className="context-icon" />
                  <div>
                    <MoreHorizontal
                      className="context-icon"
                      onClick={handleClick}
                    />
                  </div>
                </div>
              )}
              {showModal && (
                <ContextModal msg={props} closeModal={closeModal} />
              )}
            </div>
          </div>
          <div style={{ textAlign: 'left' }} className="msg-date">
            {day} {month} {year} &nbsp; {hour}:{min}
          </div>
        </div>
      )}
    </>
  )
}
