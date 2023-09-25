import React from 'react'
import Image from 'next/image'
import { UserButton } from "@clerk/nextjs";
const NavBar = () => {
  return (
    <div className='flex justify-between p-3 px-10  border-b-[1px] shadow-sm '>
        <div className='flex gap-10 items-center '>
            <Image src="/logo.png" alt="taxi logo" width={120} height={600} />
            <div className='hidden md:flex gap-6'>
                <div className='hover:bg-gray-100 p-2 cursor-pointer rounded-md transition-all'>Home</div>
                <div className='hover:bg-gray-100 p-2 cursor-pointer rounded-md transition-all'>History</div>
                <div className='hover:bg-gray-100 p-2 cursor-pointer rounded-md transition-all'>Help</div>
            </div>





        </div>
        <UserButton afterSignOutUrl="/"/>
    </div>
  )
}

export default NavBar