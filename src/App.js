import React from 'react'
import { Route, Routes } from 'react-router'
import About from './pages/About'
import Contact from './pages/Contact'
import RootLayOut from './components/RootLayOut'
import NotFound from './pages/NotFound'
import DetailPage from './pages/DetailPage'

const App = () => {
  return (
   <Routes>

    <Route path='/' element={<RootLayOut />}>

      <Route path='about-page' element={<About />} />
      <Route path='detail/:id' element={<DetailPage /> }/>
      <Route path='contact' element={<Contact />} />
      <Route path='*' element={<NotFound /> } />

    </Route>

   </Routes>
  )
}

export default App
