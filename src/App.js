import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage.js';
import WelcomePage from './components/WelcomePage';
import Profile from './components/Profile.js';
import Classroom from './components/Classroom.js';
import Admin from './components/Admin.js';
import UserControl from './components/UserControl';


function App() {
  return (
    <div className="App">
       <div>
       <a href='/welcomepage' className=' absolute right-0 hover:underline'> WelcomePage </a>
       <a href='/home' className='hover:underline'> Home page </a>
       <a href='/profile' className='hover:underline'> Profile</a>
       <a href='/classroom' className='hover:underline'> Classroom</a> 
       <a href='/admin' className='hover:underline'> Admin </a>
       <a href='/usercontrol' className='hover:underline'> UserControl </a> 
       </div>
       
       <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route path='/welcomepage' element={<WelcomePage />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/classroom' element={<Classroom />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/usercontrol' element={<UserControl />}/>
       </Routes>
    </div>  
  );
}

export default App;
