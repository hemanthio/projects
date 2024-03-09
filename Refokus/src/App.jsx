import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from './components/Products'
import Marquees from './components/Marquees'
import Cards from './components/Cards'
import Footer from './components/Footer'

function App() {
  return (
    <div className='bg-[#161618] font-["satoshi variable"] m-0 p-0'>
   <Navbar/>
   <Work/>
  <Stripes/>
  <Products/>
  <Marquees />
  <Cards />
  <Footer/>
   </div>
  )
}

export default App