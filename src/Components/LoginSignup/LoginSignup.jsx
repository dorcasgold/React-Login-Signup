import React from 'react'
import './LoginSignup.css'
import { useState } from 'react'


function LoginSignup() {
  const [title, setTitle] = useState('Sign Up')
  return (
    <div className="container flex flex-col items-center">
      <header className='my-4 '>
        <h1 className='text-3xl font-bold'>{title}</h1>
      </header>
      <div className="inputs">
        {title === 'Sign In' ? <div></div> :
          <div className="input flex gap-5">
            <input type="text" placeholder='FirstName' />
            <input type="text" placeholder='LastName' />
          </div>
        }

        <div className="input">
          <input type="email" placeholder='email' />
        </div>
        <div className="input">
          <input type="password" placeholder='password' />
        </div>
        {title === 'Sign In' ? <div></div> : <div className="input flex">
          <input type="password" placeholder='Confirm Password' />
        </div>}

      </div>
      {title === 'Sign In' ?
        <div className="flex gap-2">
          <input type="checkbox" />
          <p>Remember me</p>
          <span>Forgot Password</span>
        </div>
        :
        <div className="checkbox flex gap-3">
          <input type="checkbox" />
          <p>I Agree with <span>Privacy</span> and <span>policy</span></p>
        </div>
      }

      {title === 'Sign In' ?
        <div className="btn">
          <button className='bg-red-600 rounded-2xl' type="submit" onClick={() => setTitle('Sign In')}>Sign In</button>
        </div> :
        <div className="btn">
          <button className='bg-red-600 rounded-2xl' type="submit" onClick={() => setTitle('Sign Up')}>Sign Up</button>
        </div>
      }


      {title === 'Sign Up' ?
        <div className="bottomLink flex gap-2">
          <p>Already have an account ?</p>
          <span className='cursor-pointer' onClick={() => setTitle('Sign In')}>Sign in</span>
        </div> :
        <div className="flex gap-2">
          <p>Don't have an account ? </p>
          <span className='cursor-pointer' onClick={() => setTitle('Sign Up')}> Sign up</span>
        </div>
      }


    </div >
  )
}

export default LoginSignup