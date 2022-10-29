import React from 'react';
import "./Signup.css";
import logo from "../../../assests/images/logo.png";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Signup = () => {
    const navigate = useNavigate();
    const [states, setStates] = useState({ name: '', email: '', contact: '', password: '', confirmpass: '', error: false })

    const handlesignin = () => {
        navigate('/')
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
                password:event.target.value

            })
        }
    }
    const handleSubmit =(e) => {
        e.preventDefault();
        if(states.password === states.confirmpass){
            alert('Form submitted')
        }
        else{
            alert('Password and Confirm Password should be same.')
        }
        

    }

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
                    <input type="text" required={true} />
                </div>
                <div className='detail1'>
                    <span>Email</span>
                    <input type="text" required={true} />
                </div>
                <div className='detail1'>
                    <span>Contact Number(Optional)</span>
                    <input type="text" />
                </div>
                <div className='detail1'>
                    <span>Password(Minimum 8 characters)</span>
                    <input type="text" onChange={event => handleChange(event)}  required={true} />
                    {states.error &&
                    <span style={{color:"red"}}>Password must be of 8 characters</span>}
                </div>
                <div className='detail1'>
                    <span>Confirm Password</span>
                    <input type="text" onChange={e => {setStates({
                        ...states,
                        confirmpass:e.target.value
                    })}} required={true} />
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