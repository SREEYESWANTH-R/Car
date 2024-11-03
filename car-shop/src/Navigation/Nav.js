import React from 'react'
import './Nav.css'
import { Link} from 'react-router-dom'

function Nav(){
  return (
    <div>
        <header className="header">
            <div className="logo">
                <img src="https://firebasestorage.googleapis.com/v0/b/mitsubishi-833f7.appspot.com/o/Assests%2Fmitsubizi_logo.png?alt=media&token=31950b44-d29e-4530-afff-98ba20e95080" alt=""/>
            </div>
            <nav className="nav">
                <ul className="nav-lst">
                    <li className="nav-item">ABOUT</li>
                    <li className="nav-item">SERVICES</li>
                    <li className="nav-item">CONTACT</li>
                    <li className="nav-item">CARS</li>
                </ul>
            </nav>
            <div className="auth-btn">
                <button> <Link to="/login" style={{color:"White",textDecoration:'none'}}> LOGIN </Link> </button>
                <button>SIGN IN</button>
            </div>
        </header>
    </div>
  )
}

export default Nav