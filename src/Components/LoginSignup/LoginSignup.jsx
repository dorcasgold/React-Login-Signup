import React from 'react'
import './LoginSignup.css'
import { useState } from 'react'


function LoginSignup() {
  const [title, setTitle] = useState('Sign Up')
  // store input value
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    password: '',
    email: '',
    confirmPassword: '',
  })
  const [errors, setErrors] = useState({})
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = {}
    if (!formData.firstName.trim()) {
      validationErrors.firstName = 'FirstName is required'
    }
    if (!formData.lastName.trim()) {
      validationErrors.lastName = 'LastName is required'
    }
    if (!formData.email.trim()) {
      validationErrors.email = 'email is required'
    } else if (!/\S+@\S\.\S+/.test(formData.email)) {
      validationErrors.email = "email is not valid"
    }
    if (!formData.password.trim()) {
      validationErrors.password = 'password is required'
    } else if (formData.password.length < 7) {
      validationErrors.email = "password should be at least 7 char"
    }
    if (formData.confirmPassword !== formData.password) {
      validationErrors.confirmPassword = 'Password not match'
    }
  }

  setErrors(validationErrors)
  if (Object.keys(validationErrors).length === 0) {
    alert("For Submitted successfully")
  }
  return (
    <form onSubmit={handleSubmit} className="container flex flex-col items-center">
      <header className='my-4 '>
        <h1 className='text-3xl font-bold'>{title}</h1>
      </header>
      <div className="inputs">
        {title === 'Sign In' ? <div></div> :
          <div className="input flex gap-5">
            <input type="text" name='firstName' autoComplete='off' placeholder='FirstName' onChange={handleChange} />
            {errors.firstName && <span>{errors.firstName}</span>}
            <input type="text" name='lastName' autoComplete='off' placeholder='LastName' />
            {errors.lastName && <span>{errors.lastName}</span>}
          </div>
        }

        <div className="input">
          <input type="email" name='email' autoComplete='off' placeholder='email' />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div className="input">
          <input type="password" name='password' placeholder='password' />
          {errors.password && <span>{errors.password}</span>}
        </div>
        {title === 'Sign In' ? <div></div> : <div className="input flex">
          <input type="password" name='confirmPassword' placeholder='Confirm Password' />
          {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
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


    </form>
  )
}

export default LoginSignup