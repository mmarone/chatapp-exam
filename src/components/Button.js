import React from 'react'

const Button = ({ text, classes = '', ...otherProps }) => {
  return (
    <button className={`button ${classes}`} {...otherProps}>
      {text}
    </button>
  )
}

export default Button
