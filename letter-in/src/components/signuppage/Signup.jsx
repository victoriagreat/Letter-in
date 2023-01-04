import React, { useState, } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from '../../firebaseConfig';
import './signup.css';

function signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullname, setFullname] = useState("");
    const [confirm, setConfirm] = useState("");
    const navigate = useNavigate();

    const signup = async () => {
        try {
        const user = await createUserWithEmailAndPassword(
            auth,
            email,
            password,
            fullname,
            confirm
            )
        } catch (error) {
            console.log(error.message);
        }
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        navigate("/");
    };
    return (
        <div className='signup-page'>
            <div className='center'>
                <h1>Signup</h1>
                <form onSubmit={handleSubmit}>
                    <label className='labels' htmlFor="name">Fullname</label><br />
                    <input type="text" placeholder="Fullname" id="name" name="Name" onChange={(e) => setFullname(e.target.value)} /><br /><br />

                    <label className='labels' htmlFor="email">Email</label><br />
                    <input type="email" placeholder="Your email address" id="email" name="Email" onChange={(e) => setEmail(e.target.value)} /><br /><br />

                    <label className='labels' htmlFor="password">Password</label><br />
                    <input type="password" placeholder='password' id="password" name="password" onChange={(e) => setPassword(e.target.value)} /><br /><br />

                    <label className='labels' htmlFor="Confirm password">Confirm Password</label><br />
                    <input type="password" placeholder='confirm password' id="password" name="password" onChange={(e) => setConfirm(e.target.value)} /><br /><br />

                    <button className='btnsign' onClick={signup} type='submit'>signup</button>
                </form>

                <div>
                    <h3>Have an account? <Link to="/login" className='linksign'>Login</Link></h3>
                </div>
            </div>


        </div>

    )
}

export default signup;