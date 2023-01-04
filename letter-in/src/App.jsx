import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './components/homepage/Home';
import Signup from './components/signuppage/Signup';
import Login from './components/loginpage/Login';
// import ProtectedRoute from './ProtectedRoute';

function App() {

  return (
    <div className='App'>
        <Routes>
          {/* <Route element = {<ProtectedRoute/>} >  */}
            <Route path="/" element={<Home /> } />
          {/* </Route> */}
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Signout" element={<Login />} />
        </Routes>
    </div>

  )

}

export default App

