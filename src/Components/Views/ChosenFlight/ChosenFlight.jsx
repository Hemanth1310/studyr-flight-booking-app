import React from 'react'
import './ChosenFlight.css'
import { useContext } from 'react'
import { BookingContext } from '../../BookingContext/BookingContext'
import flight_info from '../../../assets/flights_info'
export const ChosenFlight = () => {
    
    const {bStatus,updateBookingStatus}=useContext(BookingContext)
    const opt= bStatus;
  return (
    <div className={`airline-option`}>
    <div className={'flight-details '}>
        <div className='airline-name'>{flight_info[opt].airline}</div>
        <div className='dep'>
            <div className='deptime'>{flight_info[opt].deptime}hr</div>
            <p className='date'>Fri, 14 Feb</p>
        </div>
    
        <div className='flt-time'>
        <div className='linestrike-airline'></div>
            <div className='travtime'>{flight_info[opt].travtime} hrs</div>
            
        </div>
        <div className='dep'>
            <div className='arrtime'>{flight_info[opt].arrtime}hr</div>
            <p className='date'>Fri, 14 Feb</p>
        </div>
        <div>
            <div className='tkt-price'>${flight_info[opt].price}</div>
            <p className='pperson fade'>/Per Person </p>
        </div>
        
       
    </div>
  
</div>
  )
}
