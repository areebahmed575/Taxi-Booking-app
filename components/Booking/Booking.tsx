"use client"
import React from 'react'
import AutoCompleteAddress from './AutoCompleteAddress'

const Booking = () => {
   const screenHeight=window.innerHeight*0.72;

  return (
    <div className='p-5'>
        <h1 className='text-lg font-semibold'>Booking</h1>
        <div className='border-[1px] rounded-md p-5 ' style={{height:screenHeight}}>
        <AutoCompleteAddress />
        </div>
    </div>
  )
}

export default Booking;

{/* 
"use client"



*/}