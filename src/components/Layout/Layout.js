import React from 'react'
import Container from '../Container/Container'
import logo from '../../assets/images/logo.png'
import { NavLink } from 'react-router-dom'

import { BaseLayout } from './Layout.style'

const Layout = ({ children }) => {
  return (
    <BaseLayout className="app">
      <NavLink to="/">
        <img src={logo} width={200} alt="logo" />
      </NavLink>
      <Container>{children}</Container>
    </BaseLayout>
  )
}

export default Layout
