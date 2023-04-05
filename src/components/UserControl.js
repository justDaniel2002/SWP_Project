import React from 'react';
import { RiAdminFill, RiProfileFill } from "react-icons/ri";
import {GiTeacher, GiHouseKeys} from "react-icons/gi"
import {AiFillDelete} from "react-icons/ai"

const UserControl = ()=>{


    return(
        <div className='w-11/12 m-auto bg-gray-200'>
           <p className=' bg-blue-600 px-5 py-5 text-xl font-medium shadow-xl text-white'>Setting Record</p>
           <div className='flex'>
           <div className=' bg-white mx-10 my-10 px-5 py-5 w-3/12'>
              <div className='flex gap-5'>
              <div className=' rounded-lg w-36 h-36 bg-transparent border-2'></div>
              <p className=' text-lg font-medium'>Account_Name</p>
              </div>

              <div className='flex flex-wrap'>
              <div className=' rounded-xl flex items-center gap-2 w-28 p-0.5 text-white my-3 mr-2 text-xs font-medium px-2 bg-fuchsia-700'>
                <RiAdminFill className=' text-xl' />Admin</div>
              <div className=' rounded-xl flex items-center gap-2 w-28 p-0.5 text-white my-3 mr-2 text-xs font-medium px-2 bg-indigo-700'>
              <GiTeacher className=' text-xl' />Mentor</div>
              </div> 
              
              <div className=' font-bold opacity-60 mt-10'>
              <p className='flex items-center gap-3 text-base my-5 hover:underline'><RiProfileFill />Profile Infomation</p>     
              <p className='flex items-center gap-3 text-base my-5 hover:underline'><GiHouseKeys />Change Password</p> 
              <p className='flex items-center gap-3 text-base my-5 hover:underline'><AiFillDelete />Delete Account</p>
              </div>

              <p className='mt-10 rounded-xl bg-gray-300 hover:bg-gray-400 hover:text-white inline-block p-1 px-3 text-blue-500 font-medium'>Log Out</p>
                  
           </div>
           <div className='bg-white w-7/12 ml-10 mx-10 my-10 px-5 py-5'>
            <p className=' text-lg font-bold opacity-60 border-b-2 pb-3'>Account Records</p>
             <div className='grid grid-cols-2 mt-5 text-sm'>
                <p className='my-5 hover:underline'>Banned: <p className='inline-block mx-2 bg-blue-700 text-white px-2'>0</p></p>
                <p className='my-5 hover:underline'>Warning: <p className='inline-block mx-2 bg-blue-700 text-white px-2'>0</p></p>
                <p className='my-5 hover:underline'>Classes: <p className='inline-block mx-2 bg-blue-700 text-white px-2'>0</p></p>
                <p className='my-5 hover:underline'>Posts: <p className='inline-block mx-2 bg-blue-700 text-white px-2'>0</p></p>
                <p className='my-5 hover:underline'>Joined: <p className='inline-block mx-2 bg-blue-700 text-white px-2'>0</p></p>
                <p className='my-5 hover:underline'>Created: <p className='inline-block mx-2 bg-blue-700 text-white px-2'>0</p></p>
                <p className='my-5 hover:underline'>History </p>
             </div>
           </div>
           </div>
        </div>
    )
}

export default UserControl