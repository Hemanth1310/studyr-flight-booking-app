import React, { createContext, useState,useEffect } from "react";

export const BookingContext = createContext();

const BookingContextProvider = (props) =>{
    const [bStatus,setBStatus] = useState(localStorage.getItem('studyr-bstatus'))
       

    const updateBookingStatus=(newValue)=>{
        localStorage.setItem('studyr-bstatus',newValue)
        setBStatus(newValue)
    }
    useEffect(() => {
        console.log('bbUpdated status: ', bStatus);
      }, [bStatus]);
    return(
        <BookingContext.Provider value={{bStatus,updateBookingStatus}}>
            {props.children}
        </BookingContext.Provider>
    )
}

export default BookingContextProvider