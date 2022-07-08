import React from 'react'
import { Media } from '../../global/types'
import { motion } from 'framer-motion'

export const MediaPreview: React.FC<Media> = (props) => {
  return (
    <div className="img-container">
      <motion.img
        className="media-img"
        whileHover={{ scale: 1.05 }}
        src={props.url}
        alt={props.name}
      />
    </div>
  )
}
