import React, { useContext, useEffect, useRef } from 'react'
import all_questions from '../../assets/all_questions.js'
import './Questions.css'
import { useState } from 'react'
import q5_discount from '../../assets/q5-discount.png'
import q5_priority_checkin from '../../assets/q5-priority-checkin.png'
import q5_special_upgarde from '../../assets/q5-special-upgrade.png'
import { useNavigate } from 'react-router-dom'
import { UserPreferncesContext } from '../UserPreferencesContext/UserPreferencesContext.jsx'

export const Questions = (props) => {
    const q = all_questions
    const [qnumber,setQnumber]= useState(0)
    const [answers,setAnswers] = useState([])
    const [participantAnswers,setParticipantsAnswers]= useState([])
    const navigate = useNavigate();
    const {userPref,updateUserPrf} =useContext(UserPreferncesContext)
    // const [paraAns,setParaAns] = useState('');
    const paraAns = useRef('');

    const onAnswer = (qno,option,pa)=>{
        let ans= {
            qno:qno,
            option:option
        }
        setAnswers(prevans=>[...prevans,ans]);
        
        setQnumber(qnumber=>qnumber+1);

        // setParaAns(paraAns+1);

        paraAns.current=paraAns.current+pa;
       
        console.log(paraAns.current)
    }

    const onRegistration = (rstatus)=>{
        let panswers = {
            pid:props.pid,
            answers:answers,
            status:rstatus
        }

        if(rstatus=="guest")
        {
                paraAns.current=paraAns.current+0;
        }else{
            paraAns.current=paraAns.current+1;
        }

        console.log('this'+paraAns.current)
        
        updateUserPrf(paraAns.current);
        
        setParticipantsAnswers((p)=>[...p,panswers])
        navigate('/airlineSelection');
    }

    useEffect(()=>{
        console.log(participantAnswers)
    },[participantAnswers])

    // useEffect(()=>{console.log(paraAns)},[paraAns])


   return (
    <div className="questions">
        <h1>Please select your preferences for your next flight</h1>
            {qnumber<q.length?(
                <div>
                     <div className='question-div'>
                
                            <div className='option' onClick={()=>onAnswer(qnumber,q[qnumber].option1,0)}>
                                <img className='question-img' src={q[qnumber].img1} alt=""></img>
                                <h2>{q[qnumber].option1}</h2>
                            </div>
                            <div className='option' onClick={()=>onAnswer(qnumber,q[qnumber].option2,1)}>
                                <img className='question-img' src={q[qnumber].img2} alt=""></img>
                                <h2>{q[qnumber].option2}</h2>
                            </div>
                            
                     
                    </div>
                    <p style={{fontSize:32}}>{qnumber+1}/4</p>
                    </div>              
            ):(<div className='registration-div'>

                <div className='offers'>
                             <div className='offer'>
                                <img className='question-img' src={q5_discount} alt=""></img>
                                <h2>Special Discount</h2>
                            </div>
                            <div className='offer'>
                                <img className='question-img' src={q5_priority_checkin} alt=""></img>
                                <h2>Priority CheckIn</h2>
                            </div>
                            <div className='offer'>
                                <img className='question-img' src={q5_special_upgarde} alt=""></img>
                                <h2>Special Upgrade</h2>
                            </div>
                    {/* <img src={q5_discount}></img>
                    <img src={q5_priority_checkin}></img>
                    <img src={q5_special_upgarde}></img> */}
                </div>
                <div className='registration-option'>
                    <button onClick={()=>{onRegistration("guest")}}className='registration-button'>I Just want to be a one timer</button>
                    <button onClick={()=>{onRegistration("member")}}className='registration-button'>Join me to the club and Continue</button>
                </div>
                
            </div>)}
            
                  
    </div>
  )
}
