import React from 'react'
import './styles.scss'
import ArrowDown from 'assets/images/arrow-down.png'

const DropDown = ({children, options, show, onClick, onClickItem}) => {

  return (
    <div>
      <div className='dropdown-botton' onClick={onClick}>
      <div className='dropdown-label'>{children}</div>
        <img src={ArrowDown} className='image' alt='arrow'/>
      </div>
      {
        show && <div className='dropdown-container'>
          <div className='dropdown-box'>
            {
              options.map((el, idx) => (
                <div className='dropdown-item' key={idx} onClick={() => onClickItem(el)}>
                  <div className='dropdown-label'>{el.name}</div>
                </div>
              ))
            }
          </div>
        </div>
      }
      
    </div>
  )
}

export default DropDown