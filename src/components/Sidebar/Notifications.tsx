import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const notificationVariants = {
  hidden: {
    x: -250,
    y: -140,
    opacity: 0
  },
  visible: {
    x: +100,
    y: -140,
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
          className="modal insert-file-container"
          variants={notificationVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <div className="insert-box">You have 3 notifications!</div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
