import React, { useState, useRef } from 'react'
import { Settings } from './Settings'
import { motion } from 'framer-motion'
import { Settings as SettingsIcon } from 'react-feather'
import { useClickAway } from 'react-use'

const userName = 'Patrick'
const status = 'Busy'

export const Profile: React.FC = () => {
  const [rotation, setRotation] = useState(0)
  const [showSettings, setShowSettings] = useState(false)

  // Detects a click outside the parent div and closes the window
  const ref = useRef<HTMLDivElement | null>(null)
  useClickAway(ref, () => {
    setRotation(0)
    setShowSettings(false)
  })

  // Rotate cogwheel on mouseclick and show settings menu
  const handleClick = () => {
    if (rotation === 0) {
      setRotation(-90)
    } else {
      setRotation(0)
    }
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
      <div ref={ref}>
        <motion.div
          className="settings-btn"
          animate={{ rotate: rotation }}
          onClick={handleClick}
        >
          <SettingsIcon />
        </motion.div>
        <Settings onScreen={showSettings} close={handleClick} />
      </div>
    </div>
  )
}
