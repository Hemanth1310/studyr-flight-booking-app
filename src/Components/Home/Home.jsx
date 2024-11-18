import React, { useEffect } from 'react'
import './Home.css'
import { BlueButton } from '../Views/BlueButton/BlueButton'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
    const navigate = useNavigate();

    const onNext=()=>{
        navigate('/preferences');
    }
    useEffect(()=>{
      localStorage.setItem('studyr-cookie-consent','')
      localStorage.setItem('studyr-bstatus','')
      localStorage.setItem('studyr-userPrefData','');
    },[])
  return (
    <div className='home'>
        <div className='welcome'>
        <h1>Welcome to our flight Booking Portal (Study-A)</h1>
        <p>Please Continue to Book your next flight</p>
        </div>
     
        <div className='home-route'>
            <p>Bremen</p>
            <div className='home-linestrike'></div>
            <p>Bercelona</p>
        </div>

        <BlueButton name="Continue to Book >" handleClick={onNext}></BlueButton>
    </div>
  )
}
