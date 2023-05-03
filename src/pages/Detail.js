import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Layout from '../components/Layout/Layout'
import Title from '../components/Title/Title'
import Button from '../components/Button/Button'

const Detail = () => {
  const navigate = useNavigate()
  const { name } = useSelector((state) => state.user)

  useEffect(() => {
    if (!name) {
      navigate('/')
    }
  }, [])

  return (
    <Layout>
      <Title classes="move-in-bottom mt-70 mb-120" title={`คุณ ${name}`} />
      <Button
        classes="move-in-bottom text-xl mb-20 py-20 px-60"
        text="สร้างห้องใหม่"
        onClick={() => navigate('/create-room')}
      />
      <Button
        classes="move-in-bottom"
        text="เข้าร่วมแชท"
        buttonType="text"
        onClick={() => navigate('/join-room')}
      />
    </Layout>
  )
}

export default Detail
