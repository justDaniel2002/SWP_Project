import React from 'react';
import {BsChevronCompactDown as BC} from "react-icons/bs"

const Getmenu2 = ()=>(
    <div id='inmenu' className=' bg-transparent hidden italic fixed border-solid mt-2 pt-2 w-60 z-10 text-right text-xl font-extrabold'>
      <div className=' flex justify-items-center place-content-end hover:bg-amber-300 border-b-2 border-amber-600 bg-white rounded-xl m-1 p-1'>Menu<div className='w-3'></div><BC/></div>
      <div className=' flex justify-items-center place-content-end hover:bg-amber-300 border-b-2 border-amber-600 bg-white rounded-xl m-1 p-1'>Welcome<div className='w-3'></div><BC/></div>
      <div><div className=' flex justify-items-center place-content-end hover:bg-amber-300 border-b-2 border-amber-600 bg-white rounded-xl m-1 p-1'>HomePage<div className='w-3'></div><BC/></div>
        <div className=' flex justify-items-center place-content-end hover:bg-amber-300 border-b-2 border-amber-600 bg-white rounded-xl m-1 p-1'>SIGN IN<div className='w-3'></div><BC/></div>
      </div>
      <div className=' flex justify-items-center place-content-end hover:bg-amber-300 border-b-2 border-amber-600 bg-white rounded-xl m-1 p-1'>About us<div className='w-3'></div><BC/></div>
     </div>
)


  export default Getmenu2