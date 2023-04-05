import React from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import logo from "./favicon.ico"
import {BsPlusLg} from "react-icons/bs";
import {CgProfile} from "react-icons/cg";
import * as ReactDOM from 'react-dom';
import Getmenu2 from './Getmenu2';

const doMenu = () => {
  document.getElementById("inmenu").style.display = 'block'
  
}

const hideMenu=()=>{
  document.getElementById("inmenu").style.display = 'none'
}


const Nav = ()=>(
    <div className='Navbar flex items-center pt-3 bg-transparent justify-between'>
  <div onMouseOut={hideMenu} onMouseOver={doMenu} className='flex items-center'>    
  <div id='menu' className=' m-2 text-3xl hover:bg-slate-200'><AiOutlineMenu /><Getmenu2 /></div>
  <img id='logo' className=' w-12 mb-2' src={logo} alt="happy-logo" />
  <div id='title' className=' m-3 font-bold text-base text-clip whitespace-nowrap' >Happy program</div>
  </div>
  <div className='reverse flex flex-wrap ml-[44%] items-center'>
  <div id='more' className=' text-bs font-bold m-2 hover:bg-slate-200'>More</div>
  <div id='plus' className=' ml-2 text-2xl hover:bg-slate-200'><BsPlusLg /></div>
  <div id='user' className=' ml-4 text-4xl mr-3 hover:bg-slate-200'><CgProfile /></div>
  </div>
    </div>)

    export default Nav;
   





