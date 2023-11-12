import React from 'react'
import { Icon } from 'next/dist/lib/metadata/types/metadata-types'

const Button = ({icon: Icon}) => {
const iconSize = 25
  return (
    <>
        <button className='absolute top-[50%] translate-y-[-50%] right-2 bg-blue-10 p-2 rounded-full'>
            <Icon size = {iconSize} color= {"white"} />
        </button>
    </>
  )
}

export default Button