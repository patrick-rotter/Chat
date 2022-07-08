import React from 'react'
import { FilePreview } from './FilePreview'
import { files } from '../../demo/files'

/* TODO: Good idea to implement a max. of 4 files?
In a real project this would be server-side, no?
If there are no files, render "Nothing here yet."
 */

interface Props {}

export const Files: React.FC<Props> = () => {
  let fileCount = files.length

  return (
    <div className="files-container">
      <div className="personal-text-container">
        <div className="subtext-container">
          <div className="text-media">Files</div>
          <div className="media-count">{fileCount}</div>
        </div>
        <div className="text-see-all">See all</div>
      </div>
      {files.map((file) => (
        <>
          <FilePreview {...file} />
          <hr className="hr-seperator"></hr>
        </>
      ))}
    </div>
  )
}
