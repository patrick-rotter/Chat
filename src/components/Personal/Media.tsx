import React from 'react'
import { MediaPreview } from './MediaPreview'
import { media } from '../../fixtures/media'

const mediaCount = 20

export const Media: React.FC = () => {
  return (
    <div className="media-container">
      <div className="personal-text-container">
        <div className="subtext-container">
          <div className="text-media">Media</div>
          <div className="media-count">{mediaCount}</div>
        </div>
        <div className="text-see-all">See all</div>
      </div>
      <div className="media-img-container">
        {media.map((medium) => (
          <MediaPreview {...medium} />
        ))}
      </div>
      <hr className="hr-seperator"></hr>
    </div>
  )
}
