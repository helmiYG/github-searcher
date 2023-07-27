import React from 'react'
import classname from 'classnames';
import './styles.scss'

const Input = ({
  name,
  value,
  placeholder,
  onChange,
  disabled,
  id,
  type,
  maxLength,
  input
}) => {

  const classNames = classname('a-input');
  return (
    <input
      className={classNames}
      id={id}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      maxLength={maxLength}
      disabled={disabled}
      onChange={onChange}
      
      {...input}
          />
  )
}

export default Input