import React from 'react'
import './styles.scss'

const Skeleton = () => {
  return (
    <>
    {
      Array.from({length: 9}).map((_, index) => <div key={index} className='a-skeleton-card' />)
    }
    </>
  )
}

export default Skeleton