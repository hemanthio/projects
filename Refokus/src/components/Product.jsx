import React from 'react'
import Button from './Button'


function Product({product,mover,count}) {
  return (
    <div className='w-full py-10 h-[23rem] text-white'>
        <div onMouseEnter={()=>{mover(count)}} className='max-w-screen-xl flex items-center justify-between mx-auto'>
           <h1 className='font-medium text-5xl'>{product.title}</h1>
          
           <div className='w-1/3'>
            <p className='mb-6'>{product.description}   </p>
            <div className='flex gap-4'>
          {product.live && <Button />}
          {product.case && <Button title='Case Study'/>}
          </div>
           </div>
        </div>
    </div>
  )
}

export default Product