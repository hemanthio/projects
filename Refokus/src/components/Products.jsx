import {React,useState} from 'react'
import Product from './Product'
import {motion} from 'framer-motion'

function Products() {
    var products =[
        {title:"Arqitel" ,
        description:"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
    live:true,
case:false 
},
        {title:"Cula" ,
        description:"We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
    live:true,
case:true},
        {title:"TTR" ,
        description:"We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design." ,
    live:true,
case:false},
        {title:"Maniv" ,
        description:"A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goodsLorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aspernatur, quam" ,
    live:true,
case:true},
    
    
    ]

    const [pos ,setPos]=useState(0)
    const mover =(val)=>{
        setPos(val*23)
    }
    
    return (
        <div className='mt-32 relative'>
            {products.map((product, index) => (
  <div key={index}>
      <Product product={product} mover={mover} count={index}/>
           <div className='absolute top-0 w-full h-full pointer-events-none'>
                <motion.div initial={{y:pos, x:"-50%"}} 
                 animate={{y:pos+`rem`}}
                 transition={{ease:[0.76, 0, 0.24, 1],duration:0.6 }}
                 className='window absolute  w-[26rem] left-[42%] overflow-hidden   h-[23rem] '>
                <motion.div animate={{y:-pos + `rem`}}   transition={{ease:[0.76, 0, 0.24, 1],duration:0.6 }} className=' bg-sky-100 w-full  h-full '></motion.div>
               <motion.div animate={{y:-pos + `rem`}}   transition={{ease:[0.76, 0, 0.24, 1],duration:0.6 }} className=' bg-sky-200 w-full  h-full '></motion.div>
              <motion.div animate={{y:-pos + `rem`}}   transition={{ease:[0.76, 0, 0.24, 1],duration:0.6 }} className=' bg-sky-300 w-full  h-full '></motion.div>
                 <motion.div animate={{y:-pos + `rem`}}   transition={{ease:[0.76, 0, 0.24, 1],duration:0.6 }} className=' bg-sky-400 w-full  h-full '></motion.div>
               <motion.div animate={{y:-pos + `rem`}}   transition={{ease:[0.76, 0, 0.24, 1],duration:0.6 }} className=' bg-sky-500 w-full  h-full '></motion.div>

                        </motion.div>
                    </div>
                </div>
            ))}
        </div>
    );
    
}

export default Products