import React from 'react'
import { StarredChatMessage } from './StarredChatMessage'
import { useStore } from '../../store'

export const StarredMessages: React.FC = () => {
  const { starredMsgs } = useStore()

  return (
    <div className="starred-messages-container">
      <div className="personal-text-container">
        <div className="subtext-container">
          <div className="text-media">Starred Messages</div>
        </div>
        <div className="text-see-all">See all</div>
      </div>

      <div className="scroll-starred-container">
        {starredMsgs.map((msg) => (
          <StarredChatMessage {...msg} />
        ))}
      </div>
    </div>
  )
}
