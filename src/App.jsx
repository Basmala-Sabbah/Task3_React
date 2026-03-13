import React from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Portfolio from './Components/Portfolio'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'


export default function App() {
 
  return (
    <>
   <Navbar/>
   <Header/>

    <Routes>
    <Route path='/' element={<Portfolio/>}></Route>
    <Route path='/about' element={<About />}></Route>
    <Route path='/contact' element={<Contact />}></Route>
    <Route path='*' element={<h1>Not Found</h1>}></Route>
   </Routes>

  
   <Footer/>

    </>
  )
}

