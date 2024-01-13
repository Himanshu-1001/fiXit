import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { useGoogleLogin } from '@react-oauth/google'

export default function Navbar() {
  const handleLogin = useGoogleLogin({
    onSuccess: codeResponse => console.log(codeResponse)
  });

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo"></img>
        <span className="name">fiXit</span>
      </div>

      <div className="nav-links">
        <Link to="#" className="link">About Us</Link>
        <button className='btn' onClick={handleLogin}>Login</button>
      </div>
    </nav>
  )
}
