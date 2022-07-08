import React, { FC } from 'react'
import {
  MessageSquare,
  Calendar,
  Video,
  Phone,
  Archive,
  Bell
} from 'react-feather'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'

const Sidebar: FC = () => {
  let notificationCount = 3

  return (
    <div className="sidebar-panel">
      <div className="spacer">x</div>
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
        <Bell className="icon bell-icon" />
        {notificationCount !== 0 && (
          <div className="notification-count">{notificationCount}</div>
        )}
        <div className="new-chat">+</div>
      </div>
    </div>
  )
}

export default Sidebar
