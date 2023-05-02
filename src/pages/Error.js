import React from 'react'
import { useNavigate } from 'react-router-dom'

import Layout from '../components/Layout'
import Title from '../components/Title'
import Button from '../components/Button'

const Error = () => {
  const navigate = useNavigate()

  return (
    <Layout>
      <Title classes="mt-70" title="Page Not Found!!" />
      <Button
        text="กลับหน้าหลัก"
        onClick={() => {
          navigate('/')
        }}
      />
    </Layout>
  )
}

export default Error
