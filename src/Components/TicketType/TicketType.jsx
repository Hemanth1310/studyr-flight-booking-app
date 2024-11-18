import React, { useContext } from 'react'
import { ChosenFlight } from '../Views/ChosenFlight/ChosenFlight'
import { TicketOptions } from './TicketOptions/TicketOptions'
import { UserPreferncesContext } from '../UserPreferencesContext/UserPreferencesContext'
import { Standard } from './TicketOptions/Standard'
import { StandardPlus } from './TicketOptions/StandardPlus'
import { Flexi } from './TicketOptions/Flexi'
import { BookingContext } from '../BookingContext/BookingContext'
import flight_info from '../../assets/flights_info'
import './TicketType.css'
import { NavBar } from '../NavBar/NavBar'
export const TicketType = () => {
const {userPref,updateUserPref} = useContext(UserPreferncesContext)
const {bStatus,updateBookingStatus}=useContext(BookingContext)
const fprice=flight_info[bStatus].price
  return (
    <div className='ticket-types'>
        <NavBar></NavBar>
        <ChosenFlight></ChosenFlight>
            
        <div >
        <h1>Please Choose an option from below</h1>
            {userPref[0]==='0'?
            ((userPref[2]==='0' && userPref[3]==='0')?<div className='type'>
                <Standard isRecommended={true} price={fprice}></Standard>
                <StandardPlus price={fprice} ></StandardPlus>
            </div>:<div className='type'>
                <Standard price={fprice}></Standard>
                <StandardPlus isRecommended={true} price={fprice}></StandardPlus>
            </div>):((userPref[2]==='1' || userPref[3]==='1')?<div className='type'>
                <StandardPlus price={fprice}></StandardPlus>
                <Flexi isRecommended={true} price={fprice}></Flexi>
            </div>:<div className='type'>
                <StandardPlus isRecommended={true} price={fprice}></StandardPlus>
                <Flexi price={fprice}></Flexi>
            </div>)}
        </div>
    </div>
  )
}
