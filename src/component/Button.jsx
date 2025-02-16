import React from 'react'

const Button = ({content,style,func,type="button",href}) => {
  return (
    href 
    ?

    
    <a href={type}  onClick={func} className={style}>{content}</a>

    :

    <button type={type}  onClick={func} className={style}>{content}</button>
  )
}

export default Button