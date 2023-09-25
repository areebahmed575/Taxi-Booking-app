import React, { useEffect, useState } from 'react'

function AutoCompleteAddress (){
  const [source,setSource]=useState<any>()
  const [addressList,setAddressList]=useState<any>([])

  useEffect(()=>{
    const delayDebounceFn=setTimeout(()=>{
        getAddress()
    },1000)
    return () => clearTimeout(delayDebounceFn)   
},[source]);

  const getAddress=async()=>{
    const res=await fetch('/api/search?q='+source,{
      headers:{
        "Content-Type": "application/json"
      }
    })
    const result=await res.json();
    //console.log(result)
    setAddressList(result)
    console.log(addressList)
  }


  return (
    <div className='mt-4'>
        <div >
            <label className='text-gray-400 text-[13px]'>Where From?</label>
            <input type="text"
                className='bg-white p-1 
                border-[1px] w-full 
                rounded-md outline-none
                focus:border-yellow-300 text-[14px]'
                value={source}
                onChange={(e)=>{setSource(e.target.value)}}
            />
            

            {addressList?.suggestions ?
            <div>
            {addressList?.suggestions.map((item:any,index:number)=>(
                <h2 key={index}>

                  {item.full_address}
                  </h2>
            ))}
           </div>:null}
        </div>
        <div>
            <label className='text-gray-400 text-[13px]'>Where To?</label>
            <input type="text"
                className='bg-white p-1 
                border-[1px] w-full 
                rounded-md outline-none
                focus:border-yellow-300 text-[14px]' />        
        </div>
    </div>
  )
}

export default AutoCompleteAddress