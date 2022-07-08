import React from 'react'
import { ChatHistory } from './ChatHistory';
import { ChatInput } from './ChatInput';
import { ChatPartner } from './ChatPartner'

export const Chat: React.FC = () => {
        return (
            <div className="chat-panel">
                <ChatPartner />
                <ChatHistory />
                <ChatInput />
            </div>
        );
}