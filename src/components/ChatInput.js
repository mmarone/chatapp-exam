import React from 'react'

const ChatInput = ({ ...otherProps }) => {
  return (
    <div className="chat-input">
      <textarea {...otherProps}></textarea>
      <span>Enter เพื่อส่ง</span>
    </div>
  )
}

export default ChatInput
