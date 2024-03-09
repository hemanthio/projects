import React from 'react'

function Marquee({imageurl}) {
  return (
    <div className='flex w-full py-5 gap-10 whitespace-nowrap overflow-hidden '>
       {imageurl.map(url=>(<img src={url} className='w-[6vw]flex-shrink-0'/>))}
       {imageurl.map(url=>(<img src={url} className='w-[6vw]flex-shrink-0  '/>))}
    </div>
  )
}

export default Marquee