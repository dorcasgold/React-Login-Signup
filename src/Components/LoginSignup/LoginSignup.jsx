import React from 'react'
import './LoginSignup.css'

// import user_icon from '../Assets/person.png'
// import email_icon from '../Assets/email.png'
// import password_icon from '../Assets/password.png'
// import { useState } from 'react'


function LoginSignup() {
  return (
    <div className="container">
      <header>
        <h1>Sign Up</h1>
      </header>
      <div className="inputs">
        <div className="input">
          <input type="text" placeholder='FirstName' />
          <input type="text" placeholder='LastName' />
        </div>
        <div className="input">
          <input type="email" placeholder='email' />
        </div>
        <div className="input">
          <input type="password" placeholder='password' />
        </div>
        <div className="input">
          <input type="password" placeholder='Confirm Password' />
        </div>
      </div>
      <div className="checkbox">
        <input type="checkbox" />
        <p>I Agree with <span>Privacy</span> and <span>policy</span></p>
      </div>
      <div className="btn">
        Sign up
      </div>
      <div className="bottomLink">
        <p>Already have an account ?</p>
        <span>Sign in</span>
      </div>
    </div>
  )
}

export default LoginSignup