import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Layout from '../components/Layout/Layout'
import Input from '../components/Input/Input'
import Title from '../components/Title/Title'
import Button from '../components/Button/Button'

import { updateName } from '../store/userSlice'

const Home = () => {
  const { name } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { value } = e.target
    dispatch(updateName({ name: value }))
  }

  const handleSubmit = () => {
    navigate('/detail')
  }

  return (
    <Layout>
      <Title classes="my-40" title="ชื่อของคุณ" />
      <Input classes="mb-40" onChange={handleChange} />
      {name && (
        <Button classes="move-in-bottom" text="ยืนยัน" onClick={handleSubmit} />
      )}
    </Layout>
  )
}

export default Home
