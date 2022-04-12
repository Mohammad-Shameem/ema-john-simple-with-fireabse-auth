import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'   //eta default tai second bracket e rakhi nai.
import './SignUp.css'
import { sendEmailVerification } from 'firebase/auth';

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [createUserWithEmailAndPassword, user, loading] = useCreateUserWithEmailAndPassword(auth)   //jodi user create hoy seccessfully taholei ekhane user ashbe nahole asbe na.



    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value)
    }
    const navigate = useNavigate()
    if (user) {
        navigate("/shop")
        /*  sendEmailVerification(auth.currentUser) 
             .then(() => {
 
             }) */
    }
    const handleCreateUser = (event) => {
        event.preventDefault()
        if (password !== confirmPassword) {
            setError("pasword didn't match")
            return;
        }
        if (password.length < 7) {

            setError("yor password must be 8 character")
            return;
        }
        createUserWithEmailAndPassword(email, password)

    }
    return (
        <div onSubmit={handleCreateUser} className='signup-form'>
            <div className='form-container'>
                <div>   {/* ei div er vitore rakhate form container ekta jinsishke center korbe. */}
                    <h2 className='form-title'> Sign Up</h2>
                    <form action="">
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="confirm-password">Confirm Password</label>
                            <input onBlur={handleConfirmPasswordBlur} type="password" name="password" id="" required />
                        </div>

                        <p style={{ color: "red" }}>{error}</p>

                        <input className='form-submit' type="submit" value="Sign Up" />
                    </form>
                    <p>
                        Already have an account? <Link className='form-link' to={"/login"}>Login</Link>
                    </p>
                    <div className='line-div'>
                        <hr />
                        <p>or</p>
                        <hr />
                    </div>
                    <button className='google-btn'><img className='google-font' src={"https://staffordonline.org/wp-content/uploads/2019/01/Google.jpg"} alt="" /> <span id='text'>Continue with Google</span></button>

                </div>
            </div>
        </div>
    );
};

export default SignUp;