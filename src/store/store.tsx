import create from 'zustand'
import { ChatMsg, Contact } from '../global/types'
import { contacts } from '../demo/contacts'

// Zustand for storing the current chat partner
type ChatPartnerState = {
  chatPartner: Contact
  select: (userId: number) => void
}

export const useStoreChatPartner = create<ChatPartnerState>((set) => ({
  chatPartner: contacts[0],
  select: (userId) =>
    set({ chatPartner: contacts.find((o) => o.userId === userId) })
}))

// Zustand for storing starred messages
type StarredMsgsState = {
  starredMsgs: ChatMsg[]
  addStarredMsg: (msg: ChatMsg) => void
  //removeStarredMsg: (msg: ChatMsg) => void
}

export const useStoreStarredMsgs = create<StarredMsgsState>((set) => ({
  starredMsgs: [
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
  ],
  addStarredMsg: (msg: ChatMsg) => {
    set((state) => ({
      starredMsgs: [...state.starredMsgs, msg]
    }))
  }
}))
