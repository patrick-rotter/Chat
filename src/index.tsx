import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)


/* 
TODO: 
- Chat bubble color picker in settings
- Light/Dark Mode in settings
- Mobile/Tablet scaling
*/
