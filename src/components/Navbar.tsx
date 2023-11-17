import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ButtonIcon from './Button'
import { SiFastapi } from "react-icons/si";


const Navbar = () => {
  return (
    <nav className='flex  justify-between items-center mx-5 mt-5 m-20'>
      <div className='rounded-full  p-3 border-2 border-transparent bg-clip-padding bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 cursor-pointer px-5' >
        <h1 className="text-4xl font-bold text-center text-white mx-5">
          QS Linke
        </h1>
      </div>
      
      <Link href={"https://qsl.onrender.com/"} className='transparent '>
        <ButtonIcon btnLabel={"QuickShort Linke API"} icon= {<SiFastapi />} bg={"bg-grey-10"} big={true}/>
      </Link>
    </nav>
  )
}

export default Navbar
