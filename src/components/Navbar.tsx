import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className=' h-24 flex justify-between items-center pt-10'>
      <Image
        src={"/logo.svg"}
        height={200}
        width={200}
        alt='logo'
        className='p-2 m-2'
       />
      <div className='flex xl text-white'>
        <Link href={"#"}
        className=' bg-blue-800 pr-6 pl-6 pt-2 pb-2  rounded-tl-lg rounded-bl-lg flex-1
        hover:text-blue-500 hover:bg-white transition'
        >API</Link>
        <Link href={"#"}
        className=' bg-blue-800 pr-6 pl-6 pb-2 pt-2 rounded-tr-lg rounded-br-lg flex-1
        hover:text-blue-500 hover:bg-white transition'
        >More</Link>
      </div>
    </div>
  )
}

export default Navbar