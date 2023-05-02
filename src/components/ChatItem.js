import React from 'react'

const ChatItem = ({ chat }) => {
  return (
    <div className={`chat-item text-${chat.align || 'left'}`}>
      <p className="author">คุณ {chat.author}</p>
      <div className="text">{chat.content}</div>
    </div>
  )
}

export default ChatItem
