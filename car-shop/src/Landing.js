import React from 'react'
import Nav from './Navigation/Nav'
import "./Landing.css"
import Footer from './Footer/Footer'
import {Send, DirectionsCar, Build, MiscellaneousServices} from '@mui/icons-material';

function Landing(){
  return (
    <div>
        <Nav/>
        <div className="intro">
            <div className="Abstract">
                <h1>WELCOME TO <span style={{color:"red"}}>RACE</span></h1>
                <p>Experience the thrill of the open road.</p>
                <button>SIGN IN</button>
            </div>
        </div>
    
    {/* <!-- News Section --> */}
        <div className="news-sec"> 
            <div className="intro-details">
                <div className="det-item1">
                    <DirectionsCar/>
                    <p>Get you cars</p>
                </div>
                <div className="det-item2"> 
                    <Build/>
                    <p>Get it worked</p>
                </div>
                <div className="det-item1">
                    <MiscellaneousServices/>
                    <p>Get your Service</p>
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        </div>

    {/* <!-- cnatact Us --> */}
        <div className="contact">
            <div className="sub">
                <h3>SUBSCRIBE FOR NEWSETTLERS</h3>
                <div className="sub-int">
                    <input type="text" placeholder="Enter Your Email"/>
                    <Send style={{color:'black'}}/>
                </div>
                
            </div>
            <div className="contactUs">
                <div className="contact-details">
                    <div className="cont-ip">
                        <p>Get In Touch</p>
                        <h1>Send Us a Message</h1>
                        <div className='inp'>
                            <input type="text" placeholder="Name"/>
                            <input type="text" placeholder="Email"/>
                            <input type="text" placeholder="Mobile"/>
                            <input type="text" placeholder="Subject"/>
                        </div>
                        <div className="inp-text-area">
                            <input type="text" placeholder="Address"/>
                        </div>
                        
                    </div>
                    
                </div>
                <img src="https://firebasestorage.googleapis.com/v0/b/mitsubishi-833f7.appspot.com/o/Assests%2Flocation.png?alt=media&token=c0350ada-c58c-4a6e-8a93-4901997e5a76" alt="loaction" width="700px" height="500px"/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Landing