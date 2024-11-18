import React from 'react'
import './DateSelection.css'
export const DateSalection = () => {
  return (
            <div className="dates">
            <div className='day'>
                <p className='date selected'>Mon, 10 Feb</p>
                <p className='price selected'>$120 </p>
                <div className='current-date'></div>
            </div>
            <div className='day'>
                <p className='date'>Tue, 11 Feb</p>
                <p className='price'>$130 </p>
            </div>
            <div className='day'>
                <p className='date'>Wed, 12 Feb</p>
                <p className='price'>$130 </p>
            </div>
            <div className='day'>
                <p className='date'>Thu, 13 Feb</p>
                <p className='price'>$140 </p>
            </div>
            <div className='day'>
                <p className='date'>Fri, 14 Feb</p>
                <p className='price'>$140 </p>
            </div>
            <div className='day'>
                <p className='date'>Sat, 15 Feb</p>
                <p className='price'>$140 </p>
            </div>
            <div className='day'>
                <p className='date'>Sun, 16 Feb</p>
                <p className='price'>$140 </p>
            </div>
            <div className='day'>
                <p className='date fade'>Mon, 17 Feb</p>
                <p className='price fade'>$140 </p>
            </div>
        
        </div>
  )
}
