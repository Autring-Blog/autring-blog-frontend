import React, { useState } from 'react';
import './Signin.css';
import logo from '../../../assets/images/logo.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signin = () => {
  const navigate = useNavigate();
  const handleSignup = () => {
    navigate('/signup');
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const login = async (email, password) => {
    try {
      const res = await axios.post(
        'https://www.theautring.com/api/v1/login',
        {
          email,
          password,
        },
        {
          xhrFields: {
            withCredentials: true,
          },
          withCredentials: true,
        }
      );
      console.log(res);
      //console.log(res.data.data.user.email);
    } catch (err) {
      alert('error', 'Invalid Credential');
    }
  };

  const formHandler = async (e) => {
    e.preventDefault();
    console.log(email, password);
    login(email, password);
    // console.log(data);
    setEmail('');
    setPassword('');
  };

  return (
    <div className='Signin_wrapper'>
      <div className='signin_logo'>
        <img src={logo} alt='logo' />
        <span className='head_up'>Sign In</span>
      </div>
      <div className='signin_details'>
        <form className='form_signin' onSubmit={formHandler}>
          <div className='detail1'>
            <span>Email</span>
            <input type='text' required={true} onChange={emailHandler} />
          </div>
          <div className='detail1'>
            <span>Password</span>
            <input type='text' required={true} onChange={passwordHandler} />
            <div className='for_pass'>
              <span>Forgot Password</span>
            </div>
          </div>
          <div className='signin_button'>
            <button className='custom_button' type='submit'>
              Sign In
            </button>
          </div>
        </form>
        <div className='signin_foot'>
          <span onClick={handleSignup}>Don't Have An Account?</span>
          <span onClick={handleSignup}>Sign Up</span>
          <span>Or Continue With</span>
          <div className='foot_icons'>
            <a href='https://www.theautring.com/auth/google'>
              <img
                src='https://img.icons8.com/color/48/000000/google-logo.png'
                alt='icons'
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
