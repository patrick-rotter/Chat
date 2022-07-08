import React from 'react'
import { Phone, Video, Search, MoreVertical } from 'react-feather'
import { useStore } from '../../store/chatPartnerStore'

interface Props {}

export const ChatPartner: React.FC<Props> = () => {
  const { fName, lName, status } = useStore((state) => state.chatPartner)

  return (
    <div className="chat-partner">
      <div className="chat-partner-container">
        <div className="contact-info">
          <div className="contact-picture">&#128571;</div>
          <div className="name-status-container">
            <div className="contact-name">
              {fName} {lName}
            </div>
            <div className="contact-status">{status}</div>
          </div>
        </div>
        <div className="contact-btns">
          <div className="video-container">
            <Video className="contact-btn" />
            <div className="tooltip">Video Chat</div>
          </div>
          <div className="phone-container">
            <Phone className="contact-btn" />
            <div className="tooltip">Voice Chat</div>
          </div>
          <div className="search-container">
            <Search className="contact-btn" />
            <div className="tooltip">Search</div>
          </div>
          <div className="dots-container">
            <MoreVertical className="more-btn" />
            <div className="tooltip">More</div>
          </div>
        </div>
      </div>
    </div>
  )
}
