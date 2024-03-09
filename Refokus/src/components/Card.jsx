import React from 'react'
import { BsArrowRight } from "react-icons/bs";

function Card({width,start,para}) {
  return (
    <div className={` bg-zinc-800 p-5 rounded-xl ${width} text-white`} >
      
       <div className='-full'>
       <div className='w-full flex justify-between items-center'>
      <h3>one heading</h3>
      <BsArrowRight/>
       </div>
       <h1 className='text-3xl font-normal text-white'> whatever the content is </h1>
       </div>
       <div className='down w-full mt-60'>
        {
            start===true? (
                <>
                <h1 className='text-6xl font-medium tracking-tight leading-none'>Start Project</h1>
   <button className='rounded-full py-2 px-5 border-[1px] border-zinc-50 mt-6'>Contact</button>
                </>
            ): null
        }
   
       </div>
      
    </div>
  )
}

export default Card