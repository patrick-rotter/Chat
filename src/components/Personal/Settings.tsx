import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Switch from 'react-switch'
import { ThemeContext } from '../App'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined'
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined'
import HelpCenterOutlinedIcon from '@mui/icons-material/HelpCenterOutlined'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'

const settingsVariants = {
  hidden: {
    y: -350,
    opacity: 0
  },
  visible: {
    y: +20,
    opacity: 1,
    transition: {
      type: 'spring',
      mass: 0.4,
      damping: 8
    }
  }
}

type Props = {
  onScreen: boolean
  close: () => void
}

export const Settings: React.FC<Props> = (props) => {
  return (
    <AnimatePresence>
      {props.onScreen && (
        <motion.div
          className="modal settings-container"
          variants={settingsVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <ThemeContext.Consumer>
            {({ theme, toggleTheme }) => (
              <div className="theme-switch ">
                <div className="settings-text">
                  <DarkModeOutlinedIcon />
                  &nbsp; Dark Mode
                </div>
                <Switch
                  onChange={toggleTheme}
                  checked={theme === 'dark'}
                  height={14}
                  width={28}
                />
              </div>
            )}
          </ThemeContext.Consumer>
          <div className="settings-text">
            <HttpsOutlinedIcon />
            &nbsp; Privacy
          </div>
          <div className="settings-text">
            <SecurityOutlinedIcon />
            &nbsp; Security
          </div>
          <div className="settings-text">
            <HelpCenterOutlinedIcon />
            &nbsp; Help
          </div>
          <div
            className="close-btn settings-text"
            onClick={() => props.close()}
          >
            <CloseOutlinedIcon />
            &nbsp; Close
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
