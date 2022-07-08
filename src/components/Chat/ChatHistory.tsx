import React, { useEffect, useRef } from 'react'
import { ChatMessage } from './ChatMessage'
// import { SeperatorLine } from "./SeperatorLine";
import { useStore } from '../../store/chatPartnerStore'

type Props = {}

export const ChatHistory: React.FC<Props> = () => {
  const { conversation } = useStore((state) => state.chatPartner)
  const bottomRef = useRef<null | HTMLDivElement>(null)

  // Scrolls to the last chat message at 1st render and each time a message is received
  useEffect(() => {
    if (bottomRef.current === null) {
    } else
      bottomRef!.current!.scrollIntoView({ block: 'end', behavior: 'smooth' })
  }, [conversation])

  return (
    <div className="chat-history-container">
      {conversation.map((msg) => (
        <ChatMessage {...msg} />
      ))}
      <div ref={bottomRef} />
    </div>
  )
}
