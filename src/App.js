import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import RootLayOut from './components/RootLayOut'
import Contact from './pages/Contact'



const App = () => {


  return (
    <>
      <Routes>
      <Route path='/' element={<RootLayOut />} >
          <Route index element={<Home />} />
         <Route path='about' element={<About />} />
         <Route path='contact' element={<Contact/>} />
          <Route path='*' element={<NotFound />} />

      </Route>

      </Routes>
    </>
  )
}

export default App