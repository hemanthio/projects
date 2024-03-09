import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'

function App() {
  return (
    <div className='bg-[#161618] font-["satoshi variable"] m-0 p-0'>
   <Navbar/>
   <Work/>
  <Stripes/>
   </div>
  )
}

export default App