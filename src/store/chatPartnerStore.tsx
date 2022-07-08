import create from 'zustand'
import { Contact } from '../global/types'
import { contacts } from '../demo/contacts'

// Zustand for storing the current chat partner
type ChatPartnerState = {
  chatPartner: Contact
  select: (userId: number) => void
}

export const useStore = create<ChatPartnerState>((set) => ({
  chatPartner: contacts[0],
  select: (userId) =>
    set({ chatPartner: contacts.find((o) => o.userId === userId) })
}))
