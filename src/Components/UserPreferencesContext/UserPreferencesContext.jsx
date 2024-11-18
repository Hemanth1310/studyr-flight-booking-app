import { useState,createContext, useEffect } from "react";



export const UserPreferncesContext = createContext();

const UserPreferncesContextProvider = (props)=>{
    
   
    
    const [userPref,setUserPref]=useState(localStorage.getItem('studyr-userPrefData'))

    

    const updateUserPrf=(upref)=>{
        localStorage.setItem('studyr-userPrefData', upref);
        setUserPref(upref);
        
        console.log('Data set in local storage');
    }

    // useEffect(()=>{
    //     const lsdata= ;
    //     if(lsdata){
           
    //             setUserPref(lsdata); // If not JSON, store as-is
            
    //     }
        
    // },[])
    return(
        <UserPreferncesContext.Provider value={{userPref,updateUserPrf}}>
            {props.children}
        </UserPreferncesContext.Provider>
    )   
}

export default UserPreferncesContextProvider