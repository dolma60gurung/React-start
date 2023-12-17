import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <div className=' bg-slate-800 text-white flex justify-between  items-baseline px-5 py-2 '>
      <h1 className=' text-7xl font-extrabold'>Logo</h1>
      <nav className='space-x-7' >
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
     
      </nav>
    </div>
  )
}

export default Header
