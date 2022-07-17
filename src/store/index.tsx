import create from 'zustand'
import { ChatMsg, Contact } from '../global/types'
import { contacts } from '../fixtures/contacts'
import { starredMsgs } from '../fixtures/starredMessages'

type StoreState = {
  chatPartner: Contact
  starredMsgs: ChatMsg[]
  selectChatPartnerFromId: (userId: number) => void
  addStarredMsg: (msg: ChatMsg) => void
}

export const useStore = create<StoreState>((set) => ({
  chatPartner: contacts[0],
  starredMsgs: starredMsgs,
  selectChatPartnerFromId: (userId) => {
    set({ chatPartner: contacts.find((o) => o.userId === userId) })
  },
  addStarredMsg: (msg: ChatMsg) => {
    set((state) => ({
      starredMsgs: [...state.starredMsgs, msg]
    }))
  }
}))
