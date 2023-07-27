import React from 'react'
import './styles.scss'

const Button = ({children, onClick}) => {
  return (
    <div className='a-button' onClick={onClick} >{children}</div>
  )
}

export default Button