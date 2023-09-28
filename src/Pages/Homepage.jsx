import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import SliderFunction from '../Components/Slider/SliderFunction'
import Footer from './Footer'
import Movies from "./Movies"

export default function Homepage({isLogedin}) {
  return (
    <div>
        <Navbar isLogedin = {isLogedin} />
        <SliderFunction />
        <Movies/>
        <Footer />
    </div>
  )
}
