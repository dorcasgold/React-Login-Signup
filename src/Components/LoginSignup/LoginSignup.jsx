import './LoginSignup.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import { useState } from 'react'

function LoginSignup() {
  const [action, setAction] = useState("Sign Up")
  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="user icon" />
          <input type="text" placeholder='Name' />
        </div>
        <div className="input">
          <img src={email_icon} alt="email icon" />
          <input type="email" placeholder='Email Id' />
        </div>
        <div className="input">
          <img src={password_icon} alt="password icon" />
          <input type="password" placeholder='Password' />
        </div>
      </div>
      <div className="forgot-password">Lost Password? <span>Click Here</span></div>
      <div className="submit-container">
        <div className={action === "Login" ? "submit gray" : "submit"}>Sign Up</div>
        <div className={action === "Sign Up" ? "submit gray" : "submit"}>Login</div>
      </div>
    </div>
  )
}

export default LoginSignup