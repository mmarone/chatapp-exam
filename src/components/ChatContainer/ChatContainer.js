import React from 'react'

import ChatItem from '../ChatItem/ChatItem'
import { BaseChatContainer } from './ChatContainer.style'

const ChatContainer = ({ chatItem }) => {
  return (
    <BaseChatContainer className="move-in-right">
      {chatItem.map((item, i) => (
        <ChatItem key={i} chat={item} />
      ))}
    </BaseChatContainer>
  )
}

export default ChatContainer
