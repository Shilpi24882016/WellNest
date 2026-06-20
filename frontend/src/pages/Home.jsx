import React from 'react'
import {Link } from "react-router"

function Home() {
  return (
    <>
    <h1>WellNest</h1>
    <p>This id our web</p>
    <button><Link to="/login" > startGet</Link> </button>
    </>
  )
}

export default Home