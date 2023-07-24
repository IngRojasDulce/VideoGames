import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import "./navbar.css"
const Navbar = () => {
  return (
    <div className ='nav-cont'>
      <div className= 'img-cont'>
        <img src="https://img.freepik.com/psd-gratis/composicion-videojuegos-vr_1419-2358.jpg" alt ="logo"/>
      </div>
      <div className='link-cont'>
        <Link to="/home">Home</Link>
        <Link to= "/form">New Videogame</Link>
      </div>
    </div>
  )
}

export default Navbar