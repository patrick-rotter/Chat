import React, { FC, useState, useRef } from 'react'
import { useClickAway } from 'react-use'
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
import '../../styles/sidebar.css'

const notificationCount = 2

const Sidebar: FC = () => {
  const [showNotifications, setShowNotifications] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)
  useClickAway(ref, () => {
    setShowNotifications(false)
  })

  const handleClick = () => {
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
        <div className="notification-btn-container" ref={ref}>
          <Notifications onScreen={showNotifications} />
          <Bell className="icon bell-icon" onClick={handleClick} />
          <div className="notification-count not-selectable">
            {notificationCount}
          </div>
        </div>
        <div className="new-chat not-selectable">+</div>
      </div>
    </div>
  )
}

export default Sidebar
