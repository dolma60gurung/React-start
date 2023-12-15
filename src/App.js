import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {
  return (
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about-page' element={<About />} />
    <Route path='/contact' element={<Contact />} />
   </Routes>
  )
}

export default App
