import React from 'react'
import {Link } from "react-router"
import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.webp"
import image3 from "../assets/image3.jpg"
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
    <div className='flex justify-end gap-5 mt-2'> 
    <Navbar/>
    </div>
    <div className='flex flex-col items-center justify-center mt-5'>
    <h1>WellNest</h1>
    <p>Healthy habits. Clear mind. Strong life.</p>
    <div className='flex flex-row gap-5 mt-13 mb-15'>
      <img src={image1} alt="image1" className='w-80 h-50 rounded-2xl' />
      <img src={image2} alt="image2" className='w-80 h-50 rounded-2xl'/>
      <img src={image3} alt="image3" className='w-80 h-50 rounded-2xl'/>
    </div>

    <button className='bg-red-500 text-center w-80 h-10 rounded-2xl'><Link to="/login">Get Start</Link> </button>
    </div>
    </>
  )
}

export default Home