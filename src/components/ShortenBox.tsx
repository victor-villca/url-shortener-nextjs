'use client'
import React, {useState, useEffect} from 'react'
import {FaRegCopy} from 'react-icons/fa'
import {BsArrowRight} from 'react-icons/bs'
import ButtonIcon from './Button'
import Link from 'next/link'
import axios from 'axios';

const ShortenBox = () => {
  const iconSize = 25
  const [inputUrl, setInputUrl] = useState('');
  const [shortenedLink, setShortenedLink] = useState('');
  const [isLoading, setLoading] = useState(false);

  const handleGetLink = async () => {
    setLoading(true);
    try {
      const response = await axios.post('https://qsl.onrender.com/api', {
        url: inputUrl,
      });
      console.log(response)

      setShortenedLink(response.data.short_url);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className='flex flex-col justify-center items-center gap-5 p-4'>
      <h1 className=' text-5xl font-bold text-center styleGradient
      '>Shorten Your Looooooong Links :3</h1>
      <p className=' text-xl text-lite-10 text-center max-w-4xl'>Level up your link game! 🔗 
        <span className='styleGradient text-2xl font-serif'>QuickShort Linke&nbsp;</span> 
       transforms clunky URLs into sleek, personalized links. Simplify, track, and slay the link game with style. Try it now and amp up your sharing coolness!</p>
      <div className=' w-full'>
        <div className=' relative my-5 mx-auto w-[350px] h-16 flex gap-5 justify-between border-4 border-blue-500 rounded-full z-10 px-5
         lg:w-[600px] ' >
          <input
            type="url"
            placeholder='Enter the link here'
            className='h-full w-[90%] outline-none text-lg pl-9 transition-all text-gray-600 focus:text-gray-500 bg-transparent'
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
          />

          <ButtonIcon
            btnLabel={"Get Link"}
            icon={<BsArrowRight />}
            bg={"bg-grey-10"}
            big={false}
            onClickAction={handleGetLink}
          />
        </div>
      </div>
      <div>
      <div className='flex gap-3 lg:gap-5'>
        <div className='cursor-pointer'>
                <FaRegCopy  size = {iconSize} color= {"white"}/>
        </div>
        {isLoading ? (
            <p className='text-white'>Loading...</p>
          ) : (
            <Link href={shortenedLink}  target="_blank" rel="noopener noreferrer">
              {shortenedLink ? 
              <p className='styleGradient font-semibold text-2xl'>{shortenedLink}</p> : 
              <p className='text-white'>&apos;Your link weill be here&apos;</p>
              }
            </Link>
          )}
      </div>
      </div>
    </div>
  )
}

export default ShortenBox