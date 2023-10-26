'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { FormEvent } from 'react'

export default function Home() {
  const [urlink, setUrlink] = useState("example.com")
  async function getURLshortener(url: string){
    try{
      const res = await fetch(`https://ulvis.net/API/write/get?url=${url}?v=&custom=mycustomname&private=1&type=xml`)
      if (res.ok){
        const xmlText = await res.text()
        const parser = new DOMParser()
        const xmlDoc = parser.parseFromString(xmlText, 'text/html')
        const urlApi = xmlDoc.querySelector('url')

        if(urlApi){
          const newUrl = urlApi.textContent
          newUrl ?setUrlink(newUrl):console.log("null link", 1000)
        }else{
          console.log("requested failed with ", res.status)
        }
      }
      
    }catch(error){
      console.error('An error occurred:', error);

    }
  }

  async function onClick(event:FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const urlUser = formData.get("url")
    if (urlUser){
      setUrlink(urlUser.toString())      
      getURLshortener(urlUser.toString())
    }
  }

  return (
    <div className='flex flex-col gap-y-16 justify-center items-center text-center'>
      <h1 className=' text-5xl font-bold'>URL Shortener</h1>
      <div className='flex flex-col gap-8 '>
        <div className='flex justify-center items-center text-center'>
          <form onSubmit={onClick} className='flex gap-6'>
            <input type="text" name='url' className=' rounded-full'/>
            <button type='submit' className=' bg-blue-700 rounded-3xl pt-2 pb-2 pr-5 pl-5 text-white font-semibold
            hover:bg-blue-300 hover:text-blue-900 transition
            '>Submit</button>
          </form>
        </div>
        <div className='flex flex-col gap-13 '>
          <p className='flex items-center justify-center'>Here is your new short link:&nbsp;<span className='italic underline-offset-2'>{ urlink}</span></p>
          <p className=' text-xl'>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias minima esse ea, ducimus recusandae eveniet ratione non excepturi veniam quod harum, similique et porro dolore vitae voluptatem soluta ad dolorem."
          </p>
        </div>
      </div>
      
    </div>
  )
}
