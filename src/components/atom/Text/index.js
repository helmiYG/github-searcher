import React from 'react'
import classname from 'classnames';
import './styles.scss'

const Text = ({children, type, disable}) => {
  const classNames = classname('paragraph', type, disable);
  return (
    <div className={classNames}>{children}</div>
  )
}

export default Text