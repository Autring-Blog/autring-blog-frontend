import React from 'react';
import "./Signup.css";
import logo from "../../../assets/images/logo.png";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import validator from 'validator';
import axios from 'axios';

const Signup = () => {
    const navigate = useNavigate();
    const [states, setStates] = useState({ user: '', email: '', contact: '', password: '', confirmpass: '', error: false, err: false })
    const validateEmail = () => {
        var email = states.email

        if (validator.isEmail(email)) {
            setStates({
                ...states,
                err: false
            })
            return true;

        } else {
            setStates({
                ...states,
                err: true
            })
            return false;
        }
    };

    const handlesignin = () => {
        navigate('/signin')
    }
    const handleChange = (event) => {
        const pass = event.target.value;
        if (pass.length < 8) {
            setStates({
                ...states,
                error: true


            })
        }
        else {
            setStates({
                ...states,
                error: false,
                password: event.target.value

            })
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(states)
        const result = validateEmail();
        register(states.user,states.email,states.contact,states.password,states.confirmpass)
        if (result === true) {

            if (states.password === states.confirmpass) {
                alert('Form submitted')
            }
            else {
                alert('Password and Confirm Password should be same.')
            }
        }
    }

    const register = async (user ,email, password,  confirmpass ) => {
        try {
            const res = await axios({
                method: "POST",
                url: "https://infinite-cove-18126.herokuapp.com/api/v1/signup",
                data: {
                    name:user,
                    email,
                    password,
                    passwordConfirm:confirmpass
                },
                xhrFields: {
                    withCredentials: true,
                },
            });
            console.log(res);
            //console.log(res.data.data.user.email);
        } catch (err) {
            alert("error", "Invalid Credential");
        }
    };

    // const formHandler = async (e) => {
    //     e.preventDefault();
    //     console.log(email, password);
    //     login(email, password);
    //     // console.log(data);
    //     setEmail("");
    //     setPassword("");
    // };
    return (
        <div className='Signup_wrapper'>
            <div className="Signup_logo">
                <img src={logo} alt="logo" />
                <span className='head_up'>Sign Up</span>
            </div>
            <div className="Signup_detail">
                <form className="form_detail " onSubmit={handleSubmit}>
                    <div className='detail1'>
                        <span>Name</span>
                        <input type="text" required={true} onChange={e => {
                            setStates({
                                ...states,
                                user: e.target.value
                            })
                        }} />
                    </div>
                    <div className='detail1'>
                        <span>Email</span>
                        <input type="text" required={true} onChange={e => {
                            setStates({
                                ...states,
                                email: e.target.value
                            })
                        }} />
                        {states.err &&
                            <span style={{ color: 'red' }}>Invalid Email</span>}
                    </div>
                    <div className='detail1'>
                        <span>Contact Number(Optional)</span>
                        <input type="tel"  onChange={e => {
                            setStates({
                                ...states,
                                contact: e.target.value
                            })
                        }} />
                    </div>
                    <div className='detail1'>
                        <span>Password(Minimum 8 characters)</span>
                        <input type="text" onChange={event => handleChange(event)} required={true} />
                        {states.error &&
                            <span style={{ color: "red" }}>Password must be of 8 characters</span>}
                    </div>
                    <div className='detail1'>
                        <span>Confirm Password</span>
                        <input type="text" onChange={e => {
                            setStates({
                                ...states,
                                confirmpass: e.target.value
                            })
                        }} required={true} />
                    </div>
                    <div className="signup_button">
                        <button className='custom_button' type='submit' >Sign Up
                        </button>
                    </div>
                </form>
                <div className="signup_foot">
                    <span onClick={handlesignin}>Already Have An Account?</span>
                    <span onClick={handlesignin}>Sign In</span>
                </div>




            </div>

        </div>
    )
}

export default Signup;