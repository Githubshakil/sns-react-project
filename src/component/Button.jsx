import React from 'react'

const Button = ({content,style,func,type="button"}) => {
  return (
    <button type={type}  onClick={func} className={style}>{content}</button>
  )
}

export default Button