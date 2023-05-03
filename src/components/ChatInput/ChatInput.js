import React from 'react'

import { BaseChatInput } from './ChatInput.style'

const ChatInput = ({ ...otherProps }) => {
  return (
    <BaseChatInput className="chat-input">
      <textarea {...otherProps}></textarea>
      <span>Enter เพื่อส่ง</span>
    </BaseChatInput>
  )
}

export default ChatInput
