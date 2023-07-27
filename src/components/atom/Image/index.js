import React from 'react'
import './styles.scss'

const Image = ({source, alt}) => {
  return (
    <img src={source} alt={alt} className='image' />
  )
}

export default Image