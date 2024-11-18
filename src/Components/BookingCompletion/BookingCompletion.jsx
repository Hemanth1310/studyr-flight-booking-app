import React from 'react'
import { ChosenFlight } from '../Views/ChosenFlight/ChosenFlight'
import { useNavigate, useParams } from 'react-router-dom'
import './BookingCompletion.css'
import { BlueButton } from '../Views/BlueButton/BlueButton'
export const BookingCompletion = () => {
    const {fp,cat}= useParams()

    const initPrice = Number(fp)-10;
    const finPrice = Number(fp)+Number(cat) 
    const navigate=useNavigate()

    const onAnalysis=()=>{
        navigate(`/analysis/${fp}/${cat}`)
    }
  return (
    <div className='booking-complete'>
        <ChosenFlight></ChosenFlight>
        <div className='price-listing'>
            <div className='listing'>
                <p>Standard Ticket Price:</p>
                <span>{initPrice}</span>
            </div>
            <div className='listing'>
                <p>Special Upgrade Cost:</p>
                <span>{cat}</span>
            </div>
            <div className='listing'>
                <p>Tax and Others:</p>
                <span>10</span>
                
            </div>
            <div className='line-strike'></div>
            <div className='listing total'>
                <p>Total:</p>
                <span>{finPrice}</span>
                
            </div>
        </div>
        <div className='conclusion'>
            <h1>Booking Successful Thank You!!!</h1>
        </div>
        <BlueButton name='END STUDY' handleClick={onAnalysis}></BlueButton>
    </div>
  )
}
