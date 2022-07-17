import React, { FC, useState } from 'react'
import {
  MessageSquare,
  Calendar,
  Video,
  Phone,
  Archive,
  Bell
} from 'react-feather'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'
import { Notifications } from './Notifications'

const Sidebar: FC = () => {
  const [showNotifications, setShowNotifications] = useState(false)
  let notificationCount = 3

  const handleClick = (): void => {
    setShowNotifications((prevShowNotifications) => !prevShowNotifications)
  }

  return (
    <div className="sidebar-panel">
      <div className="spacer not-selectable">x</div>
      <div className="icon-container">
        <div className="icon-box selected">
          <MessageSquare className="selected-icon" />
        </div>
        <div className="icon-box">
          <Calendar className="icon" />
        </div>
        <div className="icon-box">
          <Video className="icon" />
        </div>
        <div className="icon-box">
          <Phone className="icon" />
        </div>
        <div className="icon-box">
          <PeopleOutlinedIcon className="icon" />
        </div>
        <div className="icon-box">
          <Archive className="icon" />
        </div>
      </div>
      <div className="add-bell-container">
        <Notifications onScreen={showNotifications} />
        <Bell className="icon bell-icon" onClick={handleClick} />
        {notificationCount !== 0 && (
          <div className="notification-count not-selectable">
            {notificationCount}
          </div>
        )}
        <div className="new-chat">+</div>
      </div>
    </div>
  )
}

export default Sidebar
