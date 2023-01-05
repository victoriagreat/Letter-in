import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ajpg from "../image/attractive-black-woman-.jpg"
import cjpg from "../image/couple.jpg"
import sjpg from "../image/smile.jpeg"
import agjpg from "../image/aguy.jpg"
import ljpg from "../image/lady.jpg"
import './home.css';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import {auth} from '../../firebaseConfig'

export default function Home() {
    const [name, setName] = useState("");
    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })
    const signout = async () => {
        await signOut(auth)
    }

    return (

        <div className='home-page'>
                <div className='home-nav'>
                    <div className='imagelogo'>
                       <h1 className='image-logo'><span className='mart'>R</span><span className='dash'>ead</span><span className='bag'>Me</span></h1>
                    </div>

                    <div className='navbar'>
                       <ul className="home-navbar">
                          <NavLink to={'/'}><li className='logining'>Home</li></NavLink>
                          <NavLink to={'Login'}><button className='logout'  onClick={signout}>Signout</button></NavLink>
                       </ul>
                    </div>
                    <div className='useremail'>
                       {user?.email}
                    </div>
                    
                </div>

                <div className='letterbody'>
                    <div className='writeup'>
                        <h2 className='first'>Stay Motivated,</h2>
                        <h2 className='second'> each morning with ReadMe quotes.</h2>
                        <p className='third'>Enjoy some short, beautiful and meaningful quotes about life..</p>
                    </div>
                    <div className='inputhome'>
                        <form onSubmit={() => e.preventDefault()}>
                            <label for="name">Input Your Name</label><br />
                            <input onChange={(e) => setName(e.target.value)} type="text" className='input-tag' /><br />
                        </form>
                    </div>

                    <div className='over-all'>

                        <div className='message'>
                            <h1 className='messagess'>{name}</h1>
                            <h3 className='messagessss'>"Every day, think as you wake up, today I am fortunate to be alive, I have a precious human life, I am not going to waste it.
                                I am going to use all my energies to develop myself. I am going to have kind thoughts towards others,
                                I am not going to get angry or think badly about others. I am going to benefit others as much as I can."</h3>
                        </div>

                        <div className='image-message'>
                            <img className='imagelogos' src={ajpg} alt="" />
                        </div>

                    </div>
                    <div className='over-all'>

                        <div className='image-message'>
                            <img className='imagelogos' src={cjpg} alt="" />
                        </div>

                        <div className='message'>
                            <h1 className='messagess'>{name}</h1>
                            <h3 className='messagessss'>"For the great doesn't happen through impulse alone,
                             and is a succession of little things that are brought together."</h3>
                        </div>
                    </div>

                    <div className='over-all'>

                        <div className='message'>
                            <h1 className='messagess'>{name}</h1>
                            <h3 className='messagessss'>"Accept yourself, love yourself, and keep moving forward. If you want to fly,
                             you have to give up what weighs you down."</h3>
                        </div>

                        <div className='image-message'>
                            <img className='imagelogos' src={sjpg} alt="" />
                        </div>
                    </div>

                    <div className='over-all'>

                        <div className='image-message'>
                            <img className='imagelogos' src={ljpg} alt="" />
                        </div>

                        <div className='message'>
                            <h1 className='messagess'>{name}</h1>
                            <h3 className='messagessss'>"Your time is limited, so don't waste it living someone else's life.
                             Don't be trapped by dogma - which is living with the results of other people's thinking." </h3>
                        </div>

                    </div>

                    <div className='over-all'>

                        <div className='message'>
                            <h1 className='messagess'>{name}</h1>
                            <h3 className='messagessss'>"Everybody wants to be famous, but nobody wants to do the work. I live by that. 
                            You grind hard so you can play hard. At the end of the day, you put all the work in, 
                            and eventually it'll pay off. It could be in a year, it could be in 30 years. Eventually, your hard work will pay off."</h3>
                        </div>

                        <div className='image-message'>
                            <img className='imagelogos' src={agjpg} alt="" />
                        </div>
                    </div>
                </div>
        </div>
    )
};
