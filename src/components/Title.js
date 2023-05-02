import React from 'react'

const Title = ({ title, classes = '' }) => {
  return <h1 className={`title ${classes}`}>{title}</h1>
}

export default Title
