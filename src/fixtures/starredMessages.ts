import { ChatMsg } from '../global/types'

export const starredMsgs: ChatMsg[] = [
  {
    key: 79,
    text: "To star a message, simply hover over it and click 'Star' in the context menu.",
    time: new Date(90, 5, 13, 12, 12, 12, 12),
    userIsAuthor: false,
    author: 'Franz'
  },
  {
    key: 80,
    text: 'After that, it will appear in this section! :)',
    time: new Date(90, 5, 14, 13, 11, 11, 5),
    userIsAuthor: true
  }
]
