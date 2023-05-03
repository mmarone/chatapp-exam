import React from 'react'
import { BaseButton, TextButton } from './Button.style'

const getButton = (buttonType = 'base') =>
  ({
    base: BaseButton,
    text: TextButton,
  }[buttonType] || BaseButton)

const Button = ({ buttonType = 'base', text, classes = '', ...otherProps }) => {
  const CustomButtom = getButton(buttonType)

  return (
    <CustomButtom className={`${classes}`} {...otherProps}>
      {text}
    </CustomButtom>
  )
}

export default Button
