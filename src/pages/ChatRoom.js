import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Layout from '../components/Layout/Layout'
import Title from '../components/Title/Title'
import ChatContainer from '../components/ChatContainer/ChatContainer'
import ChatInput from '../components/ChatInput/ChatInput'

const ChatRoom = () => {
  const navigate = useNavigate()
  const { name } = useSelector((state) => state.user)

  useEffect(() => {
    if (!name) {
      navigate('/')
    }
  }, [])

  const { roomName } = useParams()
  const [currentChat, setCurrentChat] = useState([
    {
      author: 'eiei',
      content: 'สวัสดี',
      align: 'left',
    },
  ])
  const [newChat, setNewChat] = useState('')

  const handleOnKeyDown = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault()

      if (newChat !== '') {
        setCurrentChat([
          ...currentChat,
          {
            author: name,
            content: newChat,
            align: 'right',
          },
        ])

        setNewChat('')
      }
    }
  }

  const handleOnChange = (e) => {
    setNewChat(e.target.value)
  }

  return (
    <Layout>
      <Title
        classes="move-in-bottom align-self-start my-0"
        title={`ห้อง ${roomName}`}
      />
      <ChatContainer chatItem={currentChat} />
      <ChatInput
        onKeyDown={handleOnKeyDown}
        value={newChat}
        onChange={handleOnChange}
      />
    </Layout>
  )
}

export default ChatRoom
