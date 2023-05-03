import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Layout from '../components/Layout/Layout'
import Input from '../components/Input/Input'
import Title from '../components/Title/Title'
import Button from '../components/Button/Button'

const JoinRoom = () => {
  const navigate = useNavigate()
  const [roomName, setRoomName] = useState('')

  const handleSubmit = () => {
    if (!roomName) {
      return
    }

    navigate(`/chat-room/${roomName}`)
  }

  return (
    <Layout>
      <Title classes="move-in-bottom my-40" title="เข้าร่วมแชท" />
      <Input
        classes="move-in-bottom mb-40"
        placeholder="ชื่อห้อง"
        autoFocus
        onChange={(e) => setRoomName(e.target.value)}
      />
      <div className="button-container move-in-bottom">
        <Button
          classes="mr-50"
          text="กลับ"
          buttonType="text"
          onClick={() => navigate('/detail')}
        />
        <Button text="เข้าร่วม" onClick={handleSubmit} />
      </div>
    </Layout>
  )
}

export default JoinRoom
