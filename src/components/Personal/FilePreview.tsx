import React from 'react'
import { File } from '../../global/types'
import { formatBytes, turnFormatIntoIcon } from '../../util'
import useTimeParts from '../../hooks'

export const FilePreview: React.FC<File> = (props) => {
  const { day, monthAsText: month, year } = useTimeParts(props.time)

  const size = formatBytes(props.size, 1)
  const icon = turnFormatIntoIcon(props.format)

  return (
    <div>
      <div className="file-preview-container">
        <div className="file-icon">{icon}</div>
        <div className="file-info-container">
          <div className="filename">{props.name}</div>
          <div className="file-stats">
            {size} &#183; {day} {month} {year}
          </div>
        </div>
      </div>
    </div>
  )
}
