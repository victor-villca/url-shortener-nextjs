import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ButtonIcon from './Button'
import {BiLogIn} from 'react-icons/bi'

const Navbar = () => {
  return (
    <nav className='flex  justify-between items-center mx-5 mt-5 m-20'>
      <h1 className=' text-4xl font-bold text-center styleGradient'>QS Linke</h1>
      <ButtonIcon btnLabel={"Log In"} icon= {<BiLogIn />} bg={"bg-grey-10"} big={true}/>
    </nav>
  )
}

export default Navbar
