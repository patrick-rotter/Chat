import React, { useState } from 'react'
import { Settings } from './Settings'
import { motion } from 'framer-motion'
import { Settings as SettingsIcon } from "react-feather"


interface Props {}

export const Profile: React.FC<Props> = () => {
  const [rotation, setRotation] = useState(0)
  const [showSettings, setShowSettings] = useState(false)
  let userName = 'Patrick'
  let status = 'Busy'

  // Rotate cogwheel on mouseclick and show settings menu
  const handleClick = (): void => {
    if (rotation === 0) setRotation(-90)
    else setRotation(0)
    setShowSettings((prevShowSettings) => !prevShowSettings)
  }

  return (
    <div className="profile-container">
      <div className="name-pic-container">
        <div className="profile-picture">&#128578;</div>
        <div className="user-container">
          <div className="user-name">{userName}</div>
          <div className="user-status">{status}</div>
        </div>
      </div>
      <motion.div
        className="settings-btn"
        animate={{ rotate: rotation }}
        onClick={handleClick}
      >
        <SettingsIcon />
      </motion.div>
      <Settings onScreen={showSettings} close={handleClick} />
    </div>
  )
}
