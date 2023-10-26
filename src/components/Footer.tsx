import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center mb-1'>
    © 2023 URL Shortener - Tool to shorten a long link
    <div>
        Give us a start on<Link href={"https://github.com/victor-villca/url-shortener-nextjs/tree/main"}
        className=' font-bold'
        > Github</Link>
    </div>
    </div>
  )
}

export default Footer