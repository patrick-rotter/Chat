import React from 'react'
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined'
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined'
import { motion, AnimatePresence } from 'framer-motion'

const attachVariants = {
  hidden: {
    y: +60,
    x: +56,
    opacity: 0
  },
  visible: {
    y: -120,
    x: +56,
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

export const AttachFile: React.FC<Props> = (props) => {
  return (
    <AnimatePresence>
      {props.onScreen && (
        <motion.div
          className="modal insert-file-container"
          variants={attachVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <div className="insert-box">
            <InsertPhotoOutlinedIcon />
            &nbsp; Photo or Video
          </div>
          <hr className="hr-seperator"></hr>
          <div className="insert-box">
            <ArticleOutlinedIcon />
            &nbsp; Document
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
