import React, { useContext, useEffect } from 'react'
import './Responses.css'
import { useNavigate, useParams } from 'react-router-dom'
import flight_info from '../../assets/flights_info'
import { BookingContext } from '../BookingContext/BookingContext'
import { UserPreferncesContext } from '../UserPreferencesContext/UserPreferencesContext'
import { BlueButton } from '../Views/BlueButton/BlueButton'
import { CookieContext } from '../CookieConsent/CookieConsent'
// import { db } from '../../firebase'
// import { collection, addDoc } from "firebase/firestore"; 
import { getDatabase, ref, push } from "firebase/database";
import { app } from '../../firebase'

const database = getDatabase(app); 
export const Responses = () => {
    
    const {fp,cat}=useParams();
    const {bStatus,updateBookingStatus}=useContext(BookingContext)
    const {userPref,updateUserPrf} = useContext(UserPreferncesContext)
    const {cConsent,updateCookieConsent} =useContext(CookieContext)
    const navigate = useNavigate()
    const participant_data={
        'BookingClass':`${userPref[0]==='0'?'Economic':'Comfort'}`,
        'DurationType':`${userPref[1]==='0'?'No Rush':'In Rush'}`,
        'LugguageType':`${userPref[2]==='0'?'Light Weight':'Heavy Weight'}`,
        'Flexibility':`${userPref[3]==='0'?'false':'true'}`,
        'RegistrationStatus':`${userPref[4]==='0'?'Guest':'Registred-User'}`,
        'CookieConsent':`${cConsent?'approved':'rejected'}`,
        'Airline':`${flight_info[bStatus].airline}`,
        'BasicTicketPrice':`${flight_info[bStatus].price}`,
        'TicketCategory':`${cat==='0'?'Standard':
            cat==='30'?'Standard Plus':
            cat==='40'?'Flexi':null}`,
        'TotalSpendings':`${Number(flight_info[bStatus].price)+Number(cat)}`    
    }

    const onSumbit=()=>{
        console.log(participant_data)

    updateBookingStatus('')
    updateUserPrf('')
    updateCookieConsent(false)
        
        // navigate('/')
         window.location.href = 'https://cdp-ticketing-interface-study.web.app/SecondPart/1'
    }

    // Function to add data
const addBooking = async () => {
    const bookingsRef = ref(database, 'participants-data'); // Reference to the 'bookings' node
    push(bookingsRef, participant_data)
      .then(() => {
        console.log("Data pushed successfully");
      })
      .catch((error) => {
        console.error("Error pushing data: ", error);
      });
  };

  useEffect(()=>{
    addBooking();
  },[])

    return (
    <div className='responses'>
       <h1> Responses</h1>
        <div className='user-pref'>
            <p>User Prefferences:</p>
            <div className='pref-list'>
                <div className='res-listing'>
                    <p>Booking Class:</p>
                    {userPref[0]==='0'?<span>Economic</span>:<span>Comfort</span>}
                </div>
                <div className='res-listing'>
                    <p>Duration Type:</p>
                    {userPref[1]==='0'?<span>No Rush</span>:<span>In Rush</span>}
                </div> 
                <div className='res-listing'>
                    <p>Lugguage Type:</p>
                    {userPref[2]==='0'?<span>Light Weight</span>:<span>Heavy Weight</span>}
                </div> 
                <div className='res-listing'>
                    <p>Flexibility:</p>
                    {userPref[3]==='0'?<span>false</span>:<span>true</span>}
                </div>
            </div>     
                
        </div>

        <div className='res-listing'>
                <p>Registration Status:</p>
                {userPref[3]==='0'?<span>Guest</span>:<span>Resgistered User</span>}
        </div>
        <div className='res-listing'>
                <p>Cookie Consent:</p>
                <span>{cConsent?'approved':'rejected'}</span>
        </div>

        <div className='res-listing'>
                <p>Airline:</p>
                <span>{flight_info[bStatus].airline}</span>
        </div>
        <div className='res-listing'>
                <p>Basic Ticket Price:</p>
                <span>{flight_info[bStatus].price}</span>
        </div>
        <div className='res-listing'>
                <p>Ticket Category:</p>
                
                {cat==='0'?<span>Standard</span>:
                cat==='30'?<span>Standard Plus</span>:
                cat==='40'?<span>Flexi</span>:null}
        </div>
        <div className='res-listing'>
                <p>Total Spendings:</p>
                
               <span>{Number(flight_info[bStatus].price)+Number(cat)}</span>
        </div>

        <BlueButton name="Next Participant" handleClick={onSumbit}></BlueButton>

    </div>
  )
}
