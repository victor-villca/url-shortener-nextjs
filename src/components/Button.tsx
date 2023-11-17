'use client'
import React, { ReactNode } from 'react'
interface ButtonProps {
  btnLabel?: String,
  icon?: ReactNode,
  bg?:String,
  big:Boolean,
  onClickAction?: () =>void,
}

const ButtonIcon: React.FC<ButtonProps> = ({btnLabel: label, icon, bg, big, onClickAction}) => {
const iconSize = 25
  return (
    <>
        <button
        onClick={onClickAction}
         className= {`flex justify-between items-center gap-2 m-1
         ${ bg ? bg: 'bg-blue-10'} p-2 rounded-full`} >
          <p className= {` ${big ? 'flex': 'hidden' } p-2 font-bold text-white whitespace-nowrap lg:flex`}>{label}</p>
          <div className='p-2'>{icon && React.cloneElement(icon as React.ReactElement, { size: iconSize, color: 'white' })}</div>
        </button>
    </>
  )
}

export default ButtonIcon