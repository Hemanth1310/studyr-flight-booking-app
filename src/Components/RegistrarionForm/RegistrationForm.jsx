import React, { useContext, useEffect, useState } from 'react'
import './RegistrationForm.css'
import { BookingContext } from '../BookingContext/BookingContext'
import flight_info from '../../assets/flights_info'
import { ChosenFlight } from '../Views/ChosenFlight/ChosenFlight'
import relax from '../../assets/relax.png'
import { BlueButton } from '../Views/BlueButton/BlueButton'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ModalCookies } from '../ModalCookies/ModalCookies'
import { CookieContext } from '../CookieConsent/CookieConsent'
export const RegistrationForm = () => {
    const {bStatus,updateBookingStatus}=useContext(BookingContext)
    const [errors, setErrors] = useState({});
    const [show, setShow] = useState(false);
    const navigate = useNavigate()
    const {cConsent,updateCookieConsent} =useContext(CookieContext)
    const [formData,setFormData]=useState({
        fname:'',
        lname:"",
        dob:'',
        email:''
    })
    const handleInputChange=(e)=>{
        const {name,value} = e.target
        setFormData({
            ...formData,
            [name]:value
        })
    }

    const [isChecked,setChecked]=useState(cConsent)
   
    const handleCheckBox=(e)=>{
        setShow(true)
        // setChecked(e.target.checked)

    }

    const agreeCookies=()=>{
        setShow(false)
        setChecked(true)
        // updateCookieConsent('true')

    }
    const disagreeCookies=()=>{
        setShow(false)
        setChecked(false)
        // updateCookieConsent('false')
    }

    const formValidation=()=>{
        const newErrors={};
        if(!formData.fname) newErrors.fname ="First name is required";
        if(!formData.lname) newErrors.lname = "Last name is required";
        if(!formData.dob) newErrors.dob="Date of Birth id required"
        if(!formData.email) newErrors.email="Email is required";
        else if(!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email="Email is invalid";

        setErrors(newErrors);

        return Object.keys(newErrors).length===0;
    }
    const onSubmit=()=>{
       
        if(formValidation()) {
            updateCookieConsent(isChecked)
            navigate('/ticketType')
        
        }
    }

    useEffect(()=>{
        console.log("reg.Flag"+isChecked)
    })

  return (
    <div className='registration'>
        {show?<ModalCookies agree={agreeCookies} disagree={disagreeCookies}></ModalCookies>:null}
        <ChosenFlight></ChosenFlight>
        <div className='user-details'>
            <div>
                    <h1>Please enter your details</h1>
                    <div className='user-name'>
                        <div className='input-container'>
                            <p>First Name</p>
                            <input type="text" name="fname" value={formData.fname} onChange={handleInputChange}></input>
                            {errors.fname && <p className="error">{errors.fname}</p>}  
                        </div>
                        <div className='input-container'>
                            <p>Last Name</p>
                            <input type="text" name="lname" value={formData.lname} onChange={handleInputChange}></input>
                            {errors.lname && <p className='error'>{errors.lname}</p>}  
                        </div>
                    </div>
                    <div className='input-container'>
                            <p>DOB</p>
                            <input type="date" name="dob" value={formData.dob} onChange={handleInputChange}></input>
                            {errors.dob && <p className='error'>{errors.dob}</p>}  
                    </div>
                    <div className='input-container'>
                            <p>Email</p>
                            <input type="email" name="email" value={formData.email} onChange={handleInputChange}></input>
                            {errors.email && <p className='error'>{errors.email}</p>}  
                    </div>
                    <div className='cookies'>
                        <input type="checkbox" checked={isChecked} onChange={handleCheckBox}></input>
                        <p>I wish to receive any information about offers related to my booking(e.g. upgrades, flight-related services, feedback)? 
                            You can object to this usage with future effect at any time.</p>
                    </div>
                   <BlueButton name="Submit" handleClick={onSubmit}></BlueButton>
            </div>
            <div className='image-container'>
                {/* <img src={relax}></img> */}
                <div className='rg-hint-box'>
                        <div className="rg-persona-section">
                        <h2 className="rg-persona-subheading">Hint for Basic Information</h2>
                        <p><strong>Name:</strong> Emma Hart</p>
                        <p><strong>DOB:</strong> 30/01/1990</p>
                        <p><strong>Occupation:</strong> Freelance Designer</p>
                        <p><strong>Email:</strong> emma@abc.com</p>
                        <p><strong>Location:</strong> Berlin, Germany</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
