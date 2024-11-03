import React from 'react'
import "./Footer.css"
import {Facebook , Instagram, X} from '@mui/icons-material';

function Footer(){
  return (
    
     <div className="footer">
        <div className="Foot-items">
            <div className="foot-abt">
                <p>
                    At <span style={{color: "red"}}>Mitsubishi</span>, we combine a passion for cars with outstanding service.  
                </p>
            </div>
            <div className="foot-nav">
                <ul>
                    <li className="footnav-itm">Login</li>
                    <li className="footnav-itm">SignIn</li>
                    <li className="footnav-itm">Conatact Us</li>
                    
                </ul>
            </div>
            <div className="foot-logo">
                <Facebook fontSize='medium'/>
                <Instagram fontSize='medium'/>
                <X fontSize='medium'/>
                
            </div>
        </div>
        <div className="copyright">
            <p>Copyright reserved for website 2024</p>
        </div>
    </div>
    
  )
}

export default Footer