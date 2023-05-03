import React from 'react'

import { ChatItemGroup, Author, Text } from './ChatItem.style'

const ChatItem = ({ chat }) => {
  return (
    <ChatItemGroup className={`text-${chat.align || 'left'}`}>
      <Author className="author">คุณ {chat.author}</Author>
      <Text className="text">{chat.content}</Text>
    </ChatItemGroup>
  )
}

export default ChatItem
