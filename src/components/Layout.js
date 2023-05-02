import React from 'react'
import Container from './Container'
import logo from '../assets/images/logo.png'

const Layout = ({ children }) => {
  return (
    <div className="app">
      <img src={logo} width={200}  alt="logo" />
      <Container>{children}</Container>
    </div>
  )
}

export default Layout
