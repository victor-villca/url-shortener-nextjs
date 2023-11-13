'use client'
import React from 'react'
import {FaRegCopy} from 'react-icons/fa'
import {BsArrowRight} from 'react-icons/bs'
import ButtonIcon from './Button'
import Toogle from './Toogle'

const ShortenBox = () => {
  const iconSize = 25
  return (
    <div className='flex flex-col justify-center items-center gap-5'>
      <h1 className=' text-4xl font-bold text-center styleGradient
      '>Shorten Your Looooooong Links :3</h1>
      <p className=' text-lg text-lite-10 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus reiciendis architecto, totam maiores consequuntur molestias ipsam expedita repellendus quod? Fugiat.</p>
      <form className=' w-full'>
        <div className=' relative my-5 mx-auto w-[350px] h-16 flex justify-between border-4 border-blue-500 rounded-full z-10 px-5
         lg:w-[600px]

        '>
          <div className='absolute top-[50%] translate-y-[-50%] '>
              <FaRegCopy  size = {iconSize}/>
          </div>
          <input type="text" placeholder='Enter the link here'
            className='h-full w-[90%] outline-none text-lg pl-9 transition-all focus:text-gray-500 bg-transparent '
          />
          <ButtonIcon btnLabel={"Get Link"} icon= {<BsArrowRight />} bg={"bg-grey-10"} big={true}/>
        </div>
      </form>
      <div>
        <div>
        <Toogle />
        </div>
        <p>Auto Paste from Clipboard</p>
      </div>
    </div>
  )
}

export default ShortenBox