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
import { UIDContext } from '../Contexts/UIDContext'
import { OccuranceContext } from '../Contexts/OccuranceContext'

const database = getDatabase(app); 
export const Responses = () => {

    const {uid,handleUID} = useContext(UIDContext)
    const {occurance,handleOccurance} = useContext(OccuranceContext)
    const ospf = occurance==='fo'?'fod':'sod'
    
    const {fp,cat}=useParams();
    const {bStatus,updateBookingStatus}=useContext(BookingContext)
    const {userPref,updateUserPrf} = useContext(UserPreferncesContext)
    const {cConsent,updateCookieConsent} =useContext(CookieContext)
    const navigate = useNavigate()
    const participant_data={
        'UID':`${uid}`,
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
        'TotalSpendings':`${Number(flight_info[bStatus].price)+Number(cat)}`,
        'UserFeedBack':`${localStorage.getItem('userFeedback')}`    
    }

    const onSumbit=()=>{
        console.log(participant_data)

    updateBookingStatus('')
    updateUserPrf('')
    updateCookieConsent(false)
        
        // navigate('/')
         window.location.href = `https://cdp-ticketing-interface-study.web.app/SecondPart/1/${uid}/${ospf}`
         
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
       <h1> Thank You For the FeedBack</h1>
        <BlueButton name="Continue To next Part of the Study" handleClick={onSumbit}></BlueButton>

    </div>
  )
}
