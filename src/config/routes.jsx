import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import About from '../pages/about'
import Services from '../pages/services'
import MakeAppointment from '../pages/makeAppointment'
import Contact from '../pages/contact'

const RoutePage = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about-us' element={<About />}></Route>
        <Route path='/service' element={<Services />}></Route>
        <Route path='/make_appointment' element={<MakeAppointment />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
    </Routes>
  )
}

export default RoutePage
