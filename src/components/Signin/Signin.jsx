import React from 'react';
import "./Signin.css";
import logo from "../../assests/images/logo.png";

const Signin = () => {
  return (
    <div className='Signin_wrapper'>
      <div className="signin_logo">
      <img src={logo} alt="logo" />
      <span className='head_up'>Sign In</span>
      </div>
      

    </div>
  )
}

export default Signin