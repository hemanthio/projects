import React from 'react'
import Button from './Button'

function Navbar() {
  return (
    <div className='max-w-screen-xl mx-auto bg-[#161618] py-3 flex items-center justify-between border-b-[1px]'>
       <div className='nleft flex '>
       <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
        <div className='links flex gap-14 ml-20'>
             {["Home","Work","Culture"].map((elem,index)=>(<a className='text-white text-xs' href='#'>
                {index===1 ? ( <span style={{boxShadow:"0 0 0.2em #00ff19"}} className='inline-block w-1 h-1 rounded-full bg-green-500'></span>):null }
               
                {elem}</a>))}
        </div>
        
       </div>
       <Button/>
    </div>
  )
}

export default Navbar