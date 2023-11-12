import React from 'react'
import {FaRegCopy} from 'react-icons/fa'
import Button from './Button'
import {BsArrowRight} from 'react-icons/bs'
import Toogle from './Toogle'
const ShortenBox = () => {
  const iconSize = 25
  return (
    <div className='flex flex-col justify-center items-center gap-5'>
      <h1 className=' text-4xl font-bold text-center styleGradient
      '>Shorten Your Looooooong Links :3</h1>
      <p className=' text-lg text-lite-10 text-cente w-[25%] text-center'>Lorem ipsum dolor sit cto, totam maiores consequuntur molestias ipsam Fugiat.</p>
      <form className=' w-full'>
        <div className=' relative my-5 mx-auto w-[350px] h-16 flex justify-between border-4 border-blue-500 rounded-full z-10 px-5
         lg:w-[600px]

        '>
          <div className='absolute top-[50%] translate-y-[-50%] '>
              <FaRegCopy  size = {iconSize} color = {"white"}/>
          </div>
          <input type="text" placeholder='Enter the link here'
            className='h-full w-[90%] outline-none text-lg pl-9 transition-all focus:text-gray-500 bg-transparent '
          />
          <Button icon= {BsArrowRight} />
        </div>
      </form>
      <div className='flex items-center justify-center gap-5'>
        <Toogle />
        <p className=' text-lg text-lite-10'>Auto Paste from Clipboard</p>
      </div>
    </div>
  )
}

export default ShortenBox