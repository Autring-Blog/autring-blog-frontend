import React, { useState, useEffect } from 'react';
import './Signin.css';
import logo from '../../../assets/images/logo.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, login } from '../../../redux/actions/userAction';
import { useAlert } from 'react-alert';

const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { isAuthenticated, error } = useSelector((state) => state.user);

  const loginHandler = async (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (isAuthenticated) {
      navigate('/favourite');
    }
  }, [dispatch, error, alert, isAuthenticated, navigate]);

  return (
    <div className='Signin_wrapper'>
      <div className='signin_logo'>
        <img src={logo} alt='logo' />
        <span className='head_up'>Sign In</span>
      </div>
      <div className='signin_details'>
        <form className='form_signin' onSubmit={loginHandler}>
          <div className='detail1'>
            <span>Email</span>
            <input
              type='text'
              required={true}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete='on'
            />
          </div>
          <div className='detail1'>
            <span>Password</span>
            <input
              type='password'
              required={true}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className='for_pass'>{/* <span>Forgot Password</span> */}</div>
          </div>
          <div className='signin_button'>
            <button className='custom_button' type='submit'>
              Sign In
            </button>
          </div>
        </form>

        <div className='signin_foot'>
          <span onClick={() => navigate('/signup')}>
            Don't Have An Account?
          </span>
          <span onClick={() => navigate('/signup')}>Sign Up</span>
          {/* <span>Or Continue With</span> */}

          <div className='foot_icons'>
            {/* <a href="https://infinite-cove-18126.herokuapp.com/auth/google" >
              {/* <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt='icons' />
            /a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
