import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
   <div className='Menu bg-slate-800 flex justify-between text-white px-4 py-2'>
    <h1 className='text-4xl'>Logo</h1>
    <nav className='space-x-7'>
    <NavLink className='hover:text-red-300 mb-4' to='/about-page'>About</NavLink>
    <NavLink className='hover:text-orange-800' to='/contact'>Contact</NavLink>
    </nav>
   </div>
  )
}

export default Home
