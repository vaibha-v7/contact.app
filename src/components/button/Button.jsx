import React from 'react'
import { MdOutlineMessage } from "react-icons/md";
import './Button.css'


const Button = (props) => {
  return (
    <div>

      <button onClick={props.say}  style={props.style} className='container1'>
        
        {props.img}
        {props.text}

      </button>
      

     
    </div>
  )
}

export default Button
