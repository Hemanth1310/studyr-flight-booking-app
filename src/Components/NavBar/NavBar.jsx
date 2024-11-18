import React, { useState } from 'react'
import './NavBar.css'
import { UserPrefModifier } from '../UserPrefModifier/UserPrefModifier';
export const NavBar = () => {
    const [isModifier,setModifier]=useState(false);
    const handleNav=()=>{
        setModifier(!isModifier)
    }
  return (
    <div className="navbar">
        <button className='nav-button' onClick={handleNav}>Modify User Preferences</button>
        {isModifier?<UserPrefModifier toHide={handleNav} ></UserPrefModifier>:null}
    </div>
  )
}
