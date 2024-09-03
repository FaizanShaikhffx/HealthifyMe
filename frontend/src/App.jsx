import React from "react";
import {Route, Routes} from 'react-router-dom'; 

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import './index.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ExersiceDetail from "./components/Exercise/ExerciseDetail";
import SearchExercise from "./components/Exercise/SearchExercise";
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
      <SearchExercise/>
      <ToastContainer theme="dark" position="top-center"/>
    </>
  )
}

export default App
