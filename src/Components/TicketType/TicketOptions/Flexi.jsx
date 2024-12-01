import React from 'react'
import { BlueButton } from '../../Views/BlueButton/BlueButton'
import './TicketOptions.css'
import { useNavigate } from 'react-router-dom'
export const Flexi = (props) => {
    const price = Number(40)+Number(props.price)
    const navigate = useNavigate();

    const fp=props.price
    const cat='40'
    const handleClick=()=>{
        navigate(`/completion/${fp}/${cat}`)
    }
  return (
    <div className='ticket-options'>
        {props.isRecommended?<div className='recommened'>Recommended</div>:null}
        <div className='option-name'>Flexi</div>
        <ul>
            <li>Luaguage Upto 25 kg plus a Hand bag 7kg</li>
            <li>Full Refund on Cancellation</li>
            <li>Lost Baggage Insuarance Included</li>
            <li>Priority On-boarding</li>
        </ul>
        <div>
            <p className='price'>${price}<span>/Person</span></p>
            <p className='conditions'>*Standard ticket price plus tax</p>
        </div>
        <BlueButton handleClick={handleClick} name="Continue"></BlueButton>
    </div>
  )
}
