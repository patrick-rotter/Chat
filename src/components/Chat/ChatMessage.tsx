import React, { useState, useRef } from 'react'
import { ChatMsg } from '../../global/types'
import { MoreHorizontal, Smile } from 'react-feather'
import { ContextModal } from './ContextModal'
import { useClickAway } from 'react-use'

export const ChatMessage: React.FC<ChatMsg> = (props) => {
  const day = props.time.getDay()
  const month = props.time.toLocaleString('default', { month: 'short' })
  const year = props.time.getFullYear()
  const hour = props.time.getHours()
  const min = props.time.getMinutes()

  const [isHovering, setIsHovering] = useState(false)
  const [showModal, setShowModal] = useState(false)

  // Detects a click outside the parent div and closes the window
  const ref = useRef(null)
  useClickAway(ref, () => {
    setShowModal(false)
  })

  const handleMouseOver = (): void => {
    setIsHovering(true)
  }

  const handleMouseOut = (): void => {
    setIsHovering(false)
  }

  const handleClick = (): void => {
    setShowModal((prevShowModal) => !prevShowModal)
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
              {showModal && <ContextModal msg={props} />}
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
              {showModal && <ContextModal msg={props} />}
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
