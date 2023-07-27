import React from 'react'
import './styles.scss'

const Avatar = ({url}) => {
  return (
    <img src={url} className='a-avatar' alt='avatar' />
  )
}

export default Avatar