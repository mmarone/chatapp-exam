import React from 'react'

import { BaseInput } from './Input.style'

const Input = ({ classes = '', ...otherProps }) => {
  return <BaseInput {...otherProps} className={`${classes}`} />
}

export default Input
