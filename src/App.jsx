import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import CardDetail from './CardDetail'
import Inventry from './components/Inventry'
import Pay from './components/Pay'
import Bill from './components/Bill'
import Contact from './components/Contact'
import About from './components/About'

function App() {
  return (
   <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/pay/bill' element={<Bill/>}/>
      <Route path='/bill' element={<Bill/>} />
      <Route path='/pay' element={<Pay/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/inventry' element={<Inventry/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/:id' element={<CardDetail/>}/>
    </Routes>
   </>
  )
}

export default App