export type ChatMsg = {
    key: number,
    userIsAuthor: boolean,
    author?: string,
    text: string,
    time: Date
}

export type Contact = {
    userId: number,
    key: number,
    status: string,
    fName: string,
    lName: string,
    icon: string,
    color: string,
    stories: string[],
    conversation: ChatMsg[],
    unread: number,
    lastMsg: string,
    lastMsgDate: Date
}

export type File = {
    key: number,
    format: string,
    name: string,
    size: number,
    time: Date
}

export type Media = {
    key: number,
    url: string,
    name: string
}