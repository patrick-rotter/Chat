import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Switch from 'react-switch'
import { ThemeContext } from '../App'

const settingsVariants = {
  hidden: {
    y: -250,
    opacity: 0
  },
  visible: {
    y: +150,
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
              <div className="theme-switch settings-text">
                <div>Dark Mode</div>
                <Switch
                  onChange={toggleTheme}
                  checked={theme === 'dark'}
                  height={14}
                  width={28}
                />
              </div>
            )}
          </ThemeContext.Consumer>
          <div className="settings-text">Privacy</div>
          <div className="settings-text">Security</div>
          <div className="settings-text">Help</div>
          <div
            className="close-btn settings-text"
            onClick={() => props.close()}
          >
            Close Menu
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
