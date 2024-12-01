"use client"

import React from 'react'

const InputField = ({type,placeholder,name,changeEvent,inputValue}) => {
  return (
    <div className='w-100 flex items-center justify-center'>
      <input type={type} placeholder={placeholder} name={name} onChange={e=>changeEvent(e.target.value)} value={inputValue} className='w-80 outline-none pl-1 mt-4 h-10 border border-black-500'/>
    </div>
  )
}

export default InputField
