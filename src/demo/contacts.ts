import { Contact } from '../global/types'
import {
  rayesMsgs,
  michaelsMsgs,
  dwightsMsgs,
  ashsMsgs,
  jacksMsgs,
  lorindasMsgs,
  kierrasMsgs,
  kassandrasMsgs
} from './messages'

export const contacts: Contact[] = [
    {
      userId: 11,
      key: 1,
      status: 'Online',
      fName: 'Raye',
      lName: 'Penber',
      pic: 'A',
      stories: ['\u{1F694}', '\u{1F970}'],
      conversation: rayesMsgs,
      unread: 3,
      lastMsg:
        'To me, who knew his every mood and habit, his attitude and manner told their own story.',
      lastMsgDate: new Date(90, 11, 12, 12, 14, 12, 12)
    },
    {
      userId: 12,
      key: 2,
      status: 'Busy',
      fName: 'Michael',
      lName: 'Scott',
      pic: 'B',
      stories: ['\u{1F6B4}'],
      conversation: michaelsMsgs,
      unread: 2,
      lastMsg:
        'He was a solicitor and was using my room as a temporary convenience until his new premises were ready',
      lastMsgDate: new Date(91, 11, 12, 12, 14, 12, 12)
    },
    {
      userId: 13,
      key: 3,
      status: 'Offline',
      fName: 'Dwight',
      lName: 'Schrute',
      pic: 'C',
      stories: [],
      conversation: dwightsMsgs,
      unread: 1,
      lastMsg: 'It is very kind of you.',
      lastMsgDate: new Date(92, 11, 12, 12, 14, 12, 12)
    },
    {
      userId: 14,
      key: 4,
      status: 'Online',
      fName: 'Ash',
      lName: 'Ketchum',
      pic: 'D',
      stories: [],
      conversation: ashsMsgs,
      unread: 0,
      lastMsg:
        'I saw nothing remarkable save the bell-rope, and what purpose that could answer I confess is more than I can imagine.',
      lastMsgDate: new Date(93, 11, 12, 12, 14, 12, 12)
    },
    {
      userId: 15,
      key: 5,
      status: 'Online',
      fName: 'Jack',
      lName: 'Bauer',
      pic: 'D',
      stories: ['\u{1F525}'],
      conversation: jacksMsgs,
      unread: 0,
      lastMsg:
        'Holmes was for the moment as startled as I. His hand closed like a vice upon my wrist in his agitation. Then he broke into a low laugh and put his lips to my ear.',
      lastMsgDate: new Date(93, 11, 12, 12, 14, 12, 12)
    },
    {
      userId: 16,
      key: 6,
      status: 'Away',
      fName: 'Lorinda',
      lName: 'Cyprian',
      pic: 'D',
      stories: [],
      conversation: lorindasMsgs,
      unread: 1,
      lastMsg:
        'I took a step forward. In an instant his strange headgear began to move, and there reared itself from among his hair the squat diamond-shaped head and puffed neck of a loathsome serpent.',
      lastMsgDate: new Date(93, 11, 12, 12, 14, 12, 12)
    },
    {
      userId: 17,
      key: 7,
      status: 'Online',
      fName: 'Kierra',
      lName: 'Baz',
      pic: 'D',
      stories: ['\u{1F64A}'],
      conversation: kierrasMsgs,
      unread: 0,
      lastMsg: 'With the result of driving it through the ventilator.',
      lastMsgDate: new Date(93, 11, 12, 12, 14, 12, 12)
    },
    {
      userId: 18,
      key: 8,
      status: 'Busy',
      fName: 'Kassandra',
      lName: 'Roderick',
      pic: 'D',
      stories: ['\u{1F6A1}'],
      conversation: kassandrasMsgs,
      unread: 0,
      lastMsg:
        'I entered my consulting-room and found a gentleman seated by the table. He was quietly dressed in a suit of heather tweed with a soft cloth cap which he had laid down upon my books.',
      lastMsgDate: new Date(93, 11, 12, 12, 14, 12, 12)
    }
  ]
