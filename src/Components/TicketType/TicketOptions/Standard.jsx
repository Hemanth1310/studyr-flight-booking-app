import React from 'react'
import { BlueButton } from '../../Views/BlueButton/BlueButton'
import './TicketOptions.css'
import { useNavigate } from 'react-router-dom'
export const Standard = (props) => {
    const price = Number(0)+Number(props.price)
    const navigate = useNavigate();

    const fp=props.price
    const cat='0'
    const handleClick=()=>{
        navigate(`/completion/${fp}/${cat}`)
    }
  return (
    <div className='ticket-options'>
        {props.isRecommended?<div className='recommened'>Recommended</div>:null}
        <div className='option-name'>Standard</div>
        <ul>
            <li>Luaguage Upto 25 kg plus a Hand bag 7kg</li>
            <li>No Refund on Cancellation</li>
            <li>No Lost Baggage Insuarance </li>
        </ul>
        <div>
            <p className='price'>${price}<span>/Person</span></p>
            <p className='conditions'>*Standard ticket price plus tax</p>
        </div>
        <BlueButton handleClick={handleClick} name="Continue"></BlueButton>
    </div>
  )
}
