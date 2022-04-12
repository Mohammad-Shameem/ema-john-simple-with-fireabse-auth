import './Header.css'
import React from 'react';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
const Header = () => {
    const [user] = useAuthState(auth)  //useAuthState() ke auth pathale se amaderke user return korbe.mane jodi kono user thake ar ki.
    const handleSignOut = () => {  //eta hook diye kora na.
        signOut(auth)
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to={"/shop"}>Shop</Link>            {/* ekhane je link deya ache thik same link dite hobe route e o nahole jotoi click koruk pabe na. */}
                <Link to={"/orders"}>Order</Link>
                <Link to={"/inventory"}>Inventory</Link>
                {
                    user ? <button className='signout-button' onClick={handleSignOut}> Sign Out</button> : <Link to={"/login"} > Login</Link>
                }


                <Link to={"/about"} > About</Link>
            </div >
        </nav >
    );
};

export default Header;