import React from 'react';
import "./Signin.css";
import logo from "../../../assests/images/logo.png";
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const navigate = useNavigate();
  const handleSignup = () =>{
    navigate('/signup')
  }

  return (
    <div className='Signin_wrapper'>
      <div className="signin_logo">
        <img src={logo} alt="logo" />
        <span className='head_up'>Sign In</span>
      </div>
      <div className="signin_details">
        <form className='form_signin'>
          <div className='detail1'>
            <span>UserName</span>
            <input type="text" required={true} />
          </div>
          <div className='detail1'>
            <span>Password</span>
            <input type="text" required={true} />
            <div className='for_pass'>
              <span>Forgot Password</span>
            </div>
          </div>
          <div className="signin_button">
            <button className="custom_button">Sign In</button>
          </div>
        </form>
        <div className="signin_foot">
          <span onClick={handleSignup}>Don't Have An Account?</span>
          <span onClick={handleSignup}>Sign Up</span>
          <span>Or Continue With</span>
          <div className="foot_icons">
          <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt='icons' />
          <img src="https://img.icons8.com/fluency/48/000000/facebook-new.png" alt='icons' />
          <img src="https://img.icons8.com/fluency/48/000000/instagram-new.png" alt='icons' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin