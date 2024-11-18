import React, { useContext, useState } from 'react'
import './UserPrefModifier.css'
import all_questions from '../../assets/all_questions.js'

import { UserPreferncesContext } from '../UserPreferencesContext/UserPreferencesContext'
import { BlueButton } from '../Views/BlueButton/BlueButton'
import { useNavigate } from 'react-router-dom'
export const UserPrefModifier = (props) => {

    const {userPref,updateUserPrf} =useContext(UserPreferncesContext);

    const [q1,updateQ1] =useState(userPref[0])
    const [q2,updateQ2] =useState(userPref[1])
    const [q3,updateQ3] =useState(userPref[2])
    const [q4,updateQ4] =useState(userPref[3])
    const [reg,updateReg] =useState(userPref[4])
    const navigate=useNavigate();
    const q1change = ()=>{
        if(q1==='0')
        {
            updateQ1('1')
        }else{
            updateQ1('0')
        }
     
    }
    const q2change = ()=>{
        if(q2==='0')
        {
            updateQ2('1')
        }else{
            updateQ2('0')
        }
       
    }
    const q3change = ()=>{
        if(q3==='0')
        {
            updateQ3('1')
        }else{
            updateQ3('0')
        }
       
    }
    const q4change = ()=>{
        if(q4==='0')
        {
            updateQ4('1')
        }else{
            updateQ4('0')
        }
       
    }

    const regchange = ()=>{
        if(reg==='0')
        {
            updateReg('1')
        }else{
            updateReg('0')
        }
       
    }

    const onSubmit=()=>{
        const val = q1+q2+q3+q4+reg;

        updateUserPrf(val);
        props.toHide();
        navigate('/airlineSelection');

    }

    const onCancle=()=>{
        props.toHide();
    }

  return (
    <div className='modifier'>
        <div className="modifier-content">
            <h1>Modify your preferences</h1>
            <div className='modify-questions'>
                <div className={q1==='0'?'modify-selected':'modify-deselected'} onClick={q1change}>Economic</div>
                <div className={q1==='1'?'modify-selected':'modify-deselected'} onClick={q1change}>Comfort</div>
            </div>
            <div className='modify-questions'>
                <div className={q2==='0'?'modify-selected':'modify-deselected'} onClick={q2change}>No Rush</div>
                <div className={q2==='1'?'modify-selected':'modify-deselected'} onClick={q2change}>In Rush</div>
            </div>
            <div className='modify-questions'>
                <div className={q3==='0'?'modify-selected':'modify-deselected'} onClick={q3change}>Light Traveller</div>
                <div className={q3==='1'?'modify-selected':'modify-deselected'} onClick={q3change}>Extra Baggage Traveller</div>
            </div>
            <div className='modify-questions'>
                <div className={q4==='0'?'modify-selected':'modify-deselected'} onClick={q4change}>Fixed Date</div>
                <div className={q4==='1'?'modify-selected':'modify-deselected'} onClick={q4change}>Flixibile Date</div>
            </div>
            <div className='modify-questions'>
                <div className={reg==='0'?'modify-selected':'modify-deselected'} onClick={regchange}>Guest</div>
                <div className={reg==='1'?'modify-selected':'modify-deselected'} onClick={regchange}>Resgistered User</div>
            </div>

            <div className='sub-section'>
                <button className='cancle-modify' onClick={onCancle}>Cancle</button>
                <button className='modify-btn' onClick={onSubmit}>Modify</button>
            </div>
          
            
        </div>
    </div>
  )
}
