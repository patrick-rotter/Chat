import React, { createContext, FC, useState } from 'react'
import { Chat } from './Chat/Chat'
import { MessageOverview } from './MessageOverview/MessageOverview'
import { Personal } from './Personal/Personal'
import Sidebar from './Sidebar/Sidebar'

// Context API for light/dark mode
export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {}
})

const App: FC = () => {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = (): void => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="grid-container" id={theme}>
        <Sidebar />
        <MessageOverview />
        <Chat />
        <Personal />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
