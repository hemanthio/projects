import React from 'react'
import { IoMdReturnRight } from "react-icons/io";

function Button({title="Get Started"}) {
  return (
    <div className='w-40 px-3 py-2 bg-zinc-200 text-black rounded-full flex gap-2 items-center justify-center'>
<span className='text-xs font-regular '>{title}</span>
<IoMdReturnRight/>
    </div>
  )
}

export default Button