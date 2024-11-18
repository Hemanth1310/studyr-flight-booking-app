import React, { useContext } from 'react'
import './AirlineOption.css'
import flight_info from '../../assets/flights_info.js'
import { Link, useNavigate } from 'react-router-dom';
import { BookingContext } from '../BookingContext/BookingContext.jsx';
import { useEffect } from 'react';
import { BlueButton } from '../Views/BlueButton/BlueButton.jsx';

export const AirlineOption = (props) => {
  const opt = props.airChoice;
    const navigate = useNavigate();
    const {bStatus,updateBookingStatus}=useContext(BookingContext)
    const handleBooking =()=>{
       
         updateBookingStatus(opt);
         console.log('stuts-'+bStatus+opt);
        navigate("/registration");

    }


    return (
    <div className={`airline-option ${props.isRecommended ? 'recommended':''}`}>
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
                    
                    {/* <button className='book-btn' onClick={()=>handleBooking()}>Book a flight</button> */}
                    <BlueButton name='Book a flight' handleClick={handleBooking}></BlueButton>
                </div>
                <div>
                    {props.isRecommended? <div className='recommendation'>
                        <p>{`Recommended because you opted for ${props.recommendation} options`} </p>
                    </div>:null}
                   
                </div>
    </div>
  )
}
