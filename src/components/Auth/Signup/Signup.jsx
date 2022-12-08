import React, { useEffect, useState } from 'react';
import "./Signup.css";
import logo from "../../../assets/images/logo.png";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, register } from '../../../redux/actions/userAction'
import { REGISTER_RESET } from '../../../redux/constants/userConstant';
import { useAlert } from 'react-alert';
const Signup = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const alert = useAlert();
    const [states, setStates] = useState({ user: '', email: '', contact: '', password: '', confirmpass: '', error: false, err: false })

    const { error, isRegistered } = useSelector((state) => state.user)
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
    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = {
            name: states.user,
            email: states.email,
            password: states.password,
            passwordConfirm: states.confirmpass
        }
        dispatch(register(userData))
    }


    useEffect(() => {
        if (isRegistered) {
            alert.success("Registered Succesfully Login to Continue");
            dispatch({ type: REGISTER_RESET })
            navigate('/signin');
        }
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
    }, [dispatch, navigate, isRegistered, error, alert])


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