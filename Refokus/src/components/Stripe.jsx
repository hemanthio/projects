import React from 'react'

function Stripe({val}) {
  return (
   <div className='w-[16.6%] text-white flex mt-20 items-center justify-between border-zinc-600 px-10 py-5 border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] '>
    <img src={val.url} alt="" />
    <span className='font-semibold'>{val.number}</span>
   </div>
  )
}

export default Stripe