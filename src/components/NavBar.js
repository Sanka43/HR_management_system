import React from 'react'
import './NavBar.css';


export default function NavBar() {
  return (
    <nav className="navbar">
            <div className="navbar-logo">
                <a href="/">HRMS</a>
            </div>
            <ul className="navbar-menu">
                <li><a href="/AdminDashboard.js">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/Login">LogOut</a></li>
            </ul>
        </nav>
  )
}
