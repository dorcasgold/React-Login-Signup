import React from 'react'
import './LoginSignup.css'
import { useState } from 'react'


function LoginSignup() {
  return (
    <div className="container flex flex-col items-center">
      <header className='my-4 '>
        <h1 className='text-3xl font-bold'>Sign Up</h1>
      </header>
      <div className="inputs">
        <div className="input flex gap-5">
          <input type="text" placeholder='FirstName' />
          <input type="text" placeholder='LastName' />
        </div>
        <div className="input">
          <input type="email" placeholder='email' />
        </div>
        <div className="input">
          <input type="password" placeholder='password' />
        </div>
        <div className="input flex">
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