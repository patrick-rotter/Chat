import React from 'react'
import { ChatInput } from './ChatInput';
import { ChatPartner } from './ChatPartner'

export const Chat: React.FC = () => {
        return (
            <div className="chat-panel">
                <ChatPartner />
                <div className='chat-history' >div 2</div>
                <ChatInput />
            </div>
        );
}