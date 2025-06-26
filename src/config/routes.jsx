import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import About from '../pages/about'

const RoutePage = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about-us' element={<About />}></Route>
    </Routes>
  )
}

export default RoutePage
