import React from 'react'

import ChatItem from './ChatItem'

const ChatContainer = ({ chatItem }) => {
  return (
    <div className="chat-container move-in-right">
      {chatItem.map((item, i) => (
        <ChatItem key={i} chat={item} />
      ))}
    </div>
  )
}

export default ChatContainer
