import React, { FC } from 'react'
import { Chat } from './Chat/Chat'
import { MessageOverview } from './MessageOverview/MessageOverview'
import { Personal } from './Personal/Personal'
import Sidebar from './Sidebar/Sidebar'

const App: FC = () => {
  return (
    <div className="grid-container">
      <Sidebar />
      <MessageOverview />
      <Chat />
      <Personal />
    </div>
  )
}

export default App
