import React from 'react'

const Input = ({ classes = '', ...otherProps }) => {
  return <input {...otherProps} className={`input ${classes}`} />
}

export default Input
