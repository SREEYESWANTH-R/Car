import { TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'



function Login(){
  return (
    <div className='login'>
        <div className='login-Container'>
            <form className='login-form'>
              <h3>Login To Race</h3>
              <TextField
                 fullWidth
                 required
                 type='text'
                 helperText
                 id="outlined-basic" 
                 label="Email" 
                 variant="outlined"
                 className="customTextField"
                 />
              <TextField
                 fullWidth
                 required
                 type='password'
                 helperText
                 id="outlined-basic" 
                 label="Password" 
                 variant="outlined" 
                 className="customTextField"
                 />
              <button>Login</button>
              <p>Don't have an acount? <Link to={"/signin"}> Signin </Link></p>
            </form>
        </div>
    </div>
  )
}

export default Login