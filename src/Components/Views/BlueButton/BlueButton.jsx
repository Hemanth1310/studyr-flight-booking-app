import React from 'react'
import './BlueButton.css'
export const BlueButton = (props) => {
  return (
    <div className='blue-button'>
        <button onClick={props.handleClick}>{props.name}</button>
    </div>
  )
}
