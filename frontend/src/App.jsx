import { useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'


import Contact from './components/Contact'
import BMICalculator from './components/BMICalculator'
import Footer from './components/Footer'

function App() {
  
  return (
    <>
      <Navbar/>
      <Hero/>
      
      
      <BMICalculator/>
      <Contact/>
      <Footer/>
      <ToastContainer theme="dark" position="top-center"/>
    </>
  )
}

export default App
