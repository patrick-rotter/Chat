import React from 'react'
import { Files } from './Files'
import { Media } from './Media'
import { Profile } from './Profile'
import { StarredMessages } from './StarredMessages'

export const Personal: React.FC = () => {
  return (
    <div className="personal-container">
      <Profile />
      <div className="media-file-starred-container">
        <Media />
        <Files />
        <StarredMessages />
      </div>
    </div>
  )
}
