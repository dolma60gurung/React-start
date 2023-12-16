import React from 'react'
import { Outlet } from 'react-router'
import Home from '../pages/Home'

const RootLayOut = () => {
  return (
    <>
    <Home />
      <Outlet />

    
    </>
  )
}

export default RootLayOut
