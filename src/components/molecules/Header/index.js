import React from 'react'
import './styles.scss'
import GithubIcon from 'assets/images/github-icon.png'
import { Image, Text } from 'components/atom'

const Header = () => {
  return (
    <div className='header-container'>
      <Image source={GithubIcon} alt={'github icon'} />
          <div style={{marginLeft: '10px'}}>
            <Text type='bold'>Search Github</Text>
            <Text>Search</Text>
          </div>
    </div>
  )
}

export default Header