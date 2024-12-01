import React, { useContext, useEffect, useState } from 'react'
import './AirlineSelection.css'

import { AirlineOption } from '../AirlineOption/AirlineOption.jsx'
import { DateSalection } from '../DateSelection/DateSalection.jsx';
import { UserPreferncesContext } from '../UserPreferencesContext/UserPreferencesContext.jsx';
import { NavBar } from '../NavBar/NavBar.jsx';
export const AirlineSelection = () => {

    const {userPref,updateUserPrf} =useContext(UserPreferncesContext);

    const userChoices = userPref

    const [expandOpt,setExpandOpt]= useState(true);

    

  return (
    <div className="airlineselection">
        <NavBar></NavBar>
        <div className='route'>
            <p>Berlin</p>
            <div className='linestrike'></div>
            <p>Dubai</p>
        </div>
       <DateSalection></DateSalection>
        <div className='flight-options'>
                {userChoices[0]==0 && userChoices[1]==1 ? <div >
                    {
                         <div style={{display:'flex',flexDirection:'column',gap:'20px'}}>
                            <AirlineOption airChoice='2' isRecommended={true} recommendation="Economic, In Rush"></AirlineOption>
                            {expandOpt?  <div style={{display:'flex',flexDirection:'column',gap:'20px'}}>
                                <AirlineOption airChoice='0' isRecommended={false}></AirlineOption>
                                <AirlineOption airChoice='1' isRecommended={false}></AirlineOption>
                                {/* <button className='other-options' onClick={()=>setExpandOpt(!expandOpt)}>Lesser Options &#9650;</button> */}
                            </div>:<div>
                            {/* <button className='other-options' onClick={()=>setExpandOpt(!expandOpt)}>More Options &#9660;</button>     */}
                            </div>}
                          
                         </div>
                    }
                </div>:userChoices[0]==0 && userChoices[1]==0 ? <div >
                    {
                         <div style={{display:'flex',flexDirection:'column',gap:'20px'}}>
                            <AirlineOption airChoice='1' isRecommended={true} recommendation="Economic, No Rush"></AirlineOption>
                            {expandOpt?  <div style={{display:'flex',flexDirection:'column',gap:'20px'}}>
                                <AirlineOption airChoice='0' isRecommended={false}></AirlineOption>
                                <AirlineOption airChoice='2' isRecommended={false}></AirlineOption>
                                {/* <button className='other-options' onClick={()=>setExpandOpt(!expandOpt)}>Lesser Options &#9650;</button> */}
                            </div>:<div>
                            {/* <button className='other-options' onClick={()=>setExpandOpt(!expandOpt)}>More Options &#9660;</button>     */}
                            </div>}
                          
                         </div>
                    }
                </div>:userChoices[0]==1 && userChoices[1]==1 ? <div >
                    {
                         <div style={{display:'flex',flexDirection:'column',gap:'20px'}}>
                            <AirlineOption airChoice='0' isRecommended={true} recommendation="Comfort, In Rush"></AirlineOption>
                            {expandOpt?  <div style={{display:'flex',flexDirection:'column',gap:'20px'}}>
                                <AirlineOption airChoice='1' isRecommended={false}></AirlineOption>
                                <AirlineOption airChoice='2' isRecommended={false}></AirlineOption>
                                {/* <button className='other-options' onClick={()=>setExpandOpt(!expandOpt)}>Lesser Options &#9650;</button> */}
                            </div>:<div>
                            {/* <button className='other-options' onClick={()=>setExpandOpt(!expandOpt)}>More Options &#9660;</button>     */}
                            </div>}
                          
                         </div>
                    }
                </div>:userChoices[0]==1 && userChoices[1]==0 ? <div >
                    {
                         <div style={{display:'flex',flexDirection:'column',gap:'20px'}}>
                            <AirlineOption airChoice='2' isRecommended={true} recommendation="Comfort, No Rush"></AirlineOption>
                            {expandOpt?  <div style={{display:'flex',flexDirection:'column',gap:'20px'}}>
                                <AirlineOption airChoice='0' isRecommended={false}></AirlineOption>
                                <AirlineOption airChoice='1' isRecommended={false}></AirlineOption>
                                {/* <button className='other-options' onClick={()=>setExpandOpt(!expandOpt)}>Lesser Options &#9650;</button> */}
                            </div>:<div>
                            {/* <button className='other-options' onClick={()=>setExpandOpt(!expandOpt)}>More Options &#9660;</button>     */}
                            </div>}
                          
                         </div>
                    }
                </div>:null}
        </div>
    </div>
  )
}
