import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import DetailPage from './pages/DetailPage'



const App = () => {


  return (
    <>
      <Routes>
        
          <Route path='/' element={<Home />} />
          <Route path='detail' element={<DetailPage />} />

          <Route path='about-page' element={<About />} />
          <Route path='*' element={<NotFound />} />

      

      </Routes>
    </>
  )
}

export default App