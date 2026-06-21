import React from 'react'
import { Link } from 'react-router'
import Navbar from "../components/Navbar";

function Login() {
  return (
    <>
    <div className='flex justify-center'>
      <div className='bg-blue-800 text-center w-50'>
        <div className='flex flex-row gap-2'>
          <Navbar />
        </div>
        <form className='bg-blue-500'>
          <label htmlFor="email">Email ID</label>
          <input type="email" placeholder="Enter you Email ID" />
          <br />

          <label htmlFor="">Password</label>
          <input type="password" placeholder="Password" />
          <br />
        </form>
        <p>New here<span><Link to="/registration">Register</Link></span></p>
      </div>
       </div>
    </>
  )
}

export default Login