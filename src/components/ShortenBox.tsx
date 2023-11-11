import React from 'react'
import {FaRegCopy} from 'react-icons/fa'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'

const ShortenBox = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-5'>
      <h1 className=' text-4xl font-bold text-center styleGradient
      '>Shorten Your Looooooong Links :3</h1>
      <p className=' text-lg text-lite-10 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus reiciendis architecto, totam maiores consequuntur molestias ipsam expedita repellendus quod? Fugiat.</p>
      <form className=''>
        <div className=' relative my-5 mx-auto w-full h-6 flex justify-between'>
          <div className='absolute top-[40%] translate-y-[-50%]'>
              <FaRegCopy />
          </div>
          <input type="text" placeholder='Enter the link here'
            className='border h-full w-full outline-none text-lg pl-9 transition-all focus:text-gray-500'
          />
          <button className='absolute top-[40%] translate-y-[-50%] right-3 '><BsFillArrowRightCircleFill /></button>
        </div>
      </form>

      <div>
        <div>

        </div>
        <p>Auto Paste from Clipboard</p>
      </div>
    </div>
  )
}

export default ShortenBox