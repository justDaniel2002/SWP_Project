import React from 'react';
import Nav from './Nav.js';

import Service from './Service.js';
import Body from './Body.js';


const WelcomePage = ()=>
   (
    <div className="WelcomPage bg-gradient-to-r from-sky-200 via-blue-500 to-green-500 m-auto">
       <Nav />
       
       <Service />
       <Body />
    </div>  
  );


export default WelcomePage;