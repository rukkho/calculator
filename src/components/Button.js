import React from 'react'
import './Button.css';
function Button({content,type,handleClick}) {
    return (
        <div className={`button ${content==="AC"? "AC": content==="="?"equalToOperator":""} ${type || ""}`}
         onClick={handleClick}
        >
           {content} 
        </div>
    )
}

export default Button
