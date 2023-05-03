import React from 'react'

import { BaseTitle } from './Title.style'

const Title = ({ title, classes = '' }) => {
  return <BaseTitle className={`${classes}`}>{title}</BaseTitle>
}

export default Title
