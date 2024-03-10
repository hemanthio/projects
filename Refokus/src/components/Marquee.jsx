import React from 'react'
import {motion} from 'framer-motion'

function Marquee({imageurl,directon}) {
  return (
    <div className='flex w-full py-5  overflow-hidden '>
      <motion.div initial={{x:directon==="left"? "0":"-100%"}} animate={{x:directon==="left"? "-100%":"0"}} transition={{repeat:Infinity,duration:10,ease:"linear"}}
       className='flex flex-shrink-0 gap-20 py-6 pr-40'>
      {imageurl.map((url,index)=>(<img key={index} src={url} className=''/>))}
      </motion.div>
      <motion.div initial={{x:0}} animate={{x:-1000}} transition={{repeat:Infinity,duration:10,ease:"linear"}}
      className='flex flex-shrink-0 gap-40 py-6 pr-40'>
      {imageurl.map((url,index)=>(<img key={index} src={url} className=''/>))}
      </motion.div>
       
      
    </div>
  )
}

export default Marquee