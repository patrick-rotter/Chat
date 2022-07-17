import React from 'react'
import { FilePreview } from './FilePreview'
import { files } from '../../fixtures/files'

export const Files: React.FC = () => {
  const fileCount = files.length

  return (
    <div className="files-container">
      <div className="personal-text-container">
        <div className="subtext-container">
          <div className="text-media">Files</div>
          <div className="media-count">{fileCount}</div>
        </div>
        <div className="text-see-all">See all</div>
      </div>
      {fileCount === 0 ? (
        <div className="nothing-here-txt">Nothing here yet...</div>
      ) : (
        files.map((file) => (
          <>
            <FilePreview {...file} />
            <hr className="hr-seperator"></hr>
          </>
        ))
      )}
    </div>
  )
}
