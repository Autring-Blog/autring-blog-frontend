import React from 'react';
import "./Signup.css";
import logo from "../../assests/images/logo.png";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();

    const handlesignin = () =>{
        navigate('/Signin')
    }
    return (
        <div className='Signup_wrapper'>
            <div className="Signup_logo">
                <img src={logo} alt="logo" />
                <span className='head_up'>Sign Up</span>
            </div>
            <div className="Signup_detail">
                <div className='detail1'>
                    <span>Name</span>
                    <input type="text" required />
                </div>
                <div className='detail1'>
                    <span>Email</span>
                    <input type="text" required />
                </div>
                <div className='detail1'>
                    <span>Contact Number(Optional)</span>
                    <input type="text" />
                </div>
                <div className='detail1'>
                    <span>Password(Minimum 8 characters)</span>
                    <input type="text" required />
                </div>
                <div className='detail1'>
                    <span>Confirm Password</span>
                    <input type="text" required />
                </div>
                <div className="signup_button">
                    <button className='custom_button' onClick={handlesignin}>Sign Up
                    </button>
                </div>
                <div className="signup_foot">
                    <span onClick={handlesignin}>Already Have An Account?</span>
                    <span onClick={handlesignin}>Sign In</span>
                </div>




            </div>

        </div>
    )
}

export default Signup