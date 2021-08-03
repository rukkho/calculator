import React from 'react'
import './Button.css';
const Button = ({content, handleClick,type})=> {
    return <div className={`button-wrapper ${type||""}`}
        onClick={()=>{handleClick(content)}} >
          {content}</div>

}

 
export default Button
