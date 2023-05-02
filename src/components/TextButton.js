import React from 'react'

const TextButton = ({ text, classes = '', ...otherProps }) => {
  return (
    <button className={`text-button ${classes}`} {...otherProps}>
      {text}
    </button>
  )
}

export default TextButton
