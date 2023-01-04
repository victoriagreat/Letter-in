import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const Login = async () => {
        try {
        const user = await signInWithEmailAndPassword(
            auth,
            email,
            password
            )
        } catch (error) {
            console.log(error.message);
        }
    };
    

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        navigate("/");

    };
    return (
        <div className='loginto'>
            <div className='login-page'>
                <div className='center-page'>
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <label className='label' htmlFor="email">Email</label><br />
                        <input type="email" placeholder="Your email address" id="email" name="Email"
                            onChange={(e) => setEmail(e.target.value)} /><br /><br />


                        <label className='label' htmlFor="password">Password</label><br />
                        <input type="password" placeholder='password' id="password" name="password"
                            onChange={(e) => setPassword(e.target.value)} /><br /><br />

                        <button className='btnlog' onClick={Login}type='submit'>Login</button>

                    </form>
                    <div>
                        <h3>Don't have an account?<Link to="/Signup" className='linklog'>sign up</Link> </h3>
                    </div>

                </div>

            </div>
        </div>


    )

}
export default Login;