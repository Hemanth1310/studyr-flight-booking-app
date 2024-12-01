import React, { useContext, useEffect } from 'react'
import './Home.css'
import { BlueButton } from '../Views/BlueButton/BlueButton'
import { useNavigate, useParams } from 'react-router-dom'
import { UIDContext } from '../Contexts/UIDContext'
import { OccuranceContext } from '../Contexts/OccuranceContext'
import { Persona } from '../Persona/Persona'

export const Home = () => {
    const navigate = useNavigate();
    const {pid,ospf}=useParams();

    const {uid,handleUID} = useContext(UIDContext);
    const {occurance,handleOccurance} = useContext(OccuranceContext)

    const onNext=()=>{
        navigate('/preferences');
    }
    useEffect(()=>{
      localStorage.setItem('studyr-cookie-consent','')
      localStorage.setItem('studyr-bstatus','')
      localStorage.setItem('studyr-userPrefData','');
      handleOccurance(ospf)
      handleUID(pid)
    },[])
  return (
    <div className='home'>
        <div className='welcome'>
        <h1>Welcome to our flight Booking Portal (Study-A)</h1>
        <p style={{fontSize:'18px',fontWeight:'600'}}>Use the persona details provided to guide your decisions while performing the task. </p>
        <p style={{fontSize:'18px',fontWeight:'600'}}>Act as if you are this persona, keeping their preferences and needs in mind to complete the task effectively.</p>
        </div>
     
        {/* <div className='home-route'>
            <p>Berlin</p>
            <div className='home-linestrike'></div>
            <p>Dubai</p>
        </div> */}
        <Persona></Persona>
          
        <BlueButton name="Continue to Book >" handleClick={onNext}></BlueButton>
    </div>
  )
}
