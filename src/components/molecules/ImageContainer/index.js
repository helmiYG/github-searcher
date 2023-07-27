import React from 'react'
import './styles.scss'
import { Button, Text } from 'components/atom'

const ImageContainer = ({url, useButton,onClick }) => {
  return (
    <div className='m-image-container'> 
      <div className='image-wrapper'>
       <img src={url} alt='container' />
      </div>
      <div className='btn-wrapper'>
      {
        useButton && 
        <Button onClick={onClick}>
          <Text>click here to try again</Text>
        </Button>
      }
      </div>
    </div>
  )
}

export default ImageContainer