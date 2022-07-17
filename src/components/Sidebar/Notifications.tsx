import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const notificationVariants = {
  hidden: {
    x: -50,
    y: -120,
    opacity: 0
  },
  visible: {
    x: +50,
    y: -120,
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
}

export const Notifications: React.FC<Props> = (props) => {
  return (
    <AnimatePresence>
      {props.onScreen && (
        <motion.div
          className="modal notifications-container"
          variants={notificationVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <div className="insert-box">
            &#128058; Alex just joined Telegraph!
          </div>
          <hr className="hr-seperator"></hr>
          <div className="insert-box">
            &#128059; Ellie just joined Telegraph!
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
