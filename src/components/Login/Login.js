import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showError, setShowError] = useState('')
    const [   //eta jehetu array tai ekhane array er index onujai destructure korte hobe.mane je age je pore eta dkehte hobe. tai amra documnetation e jerokom destructure kroche amra serokom korechi.nahole se pabe na.karon eta object na je name er sathe mile gele hobe.
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth)  //ai hook ta theke amra 3 ta jinish pabo user,error,loading tai amra user niye nicci ebong seta diye condition korechi.
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handleSignInUser = (event) => {
        event.preventDefault()  //when we use form to get data from user and if user entry the required data and submit the form,the form reload by default.Its called form default behaviour.but its annoying for ux.so we can stop the thing when user submit the form by this way.
        signInWithEmailAndPassword(email, password)
    }
    // if (user) {    //ekhane react er jokhon kono state change hoy tokhon se re render korar jonno abar chole.tai porerbar se jokhon user ke pabe ba user er deya data gulo correct hole user ke pabe tokhon se amader deya page e user ke niye jabe.ekhane sob re render er khela.
    //     navigate('/order')
    // }
    if (user) {

        navigate(from, { replace: true })   //ekhane bola hocche je user jekhan theke amader login page e ashce user ke amra abar sekhane pathiye dibo.
    }

    return (
        <div onSubmit={handleSignInUser} className='login-form'>
            <div className='form-container'>
                <div>   {/* ei div er vitore rakhate form container ekta jinsishke center korbe. */}
                    <h2 className='form-title'> Login</h2>
                    <form action="">
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                            {error && <p style={{ color: "red", fontWeight: 700, fontSize: 18 }}>{error?.message.slice(22, 36)}</p>} {/* intial obosthay kono error pabe na.tai error ekhane optional chaining korte hobe nahole error diye dibe. */}
                            {loading && <p style={{ color: 'orange', fontWeight: 700, fontSize: 18 }}>LOADING....PLEASE WAIT !!!</p>}
                        </div>
                        <input className='form-submit' type="submit" value="Login" />
                    </form>
                    <p>
                        New to ema-john? <Link className='form-link' to={"/signup"}>Create an Account</Link>
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

export default Login;