import React from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { IoIosArrowBack as Back } from "react-icons/io";
import {CgProfile} from "react-icons/cg";

const Profile = ()=>(
    <div className='  h-screen'>
       <div className=' pb-2 flex text-4xl m-2 ml-16 mr-16 border-b-2 border-slate-300 justify-between'><div className=' mt-1 hover:bg-slate-300 rounded-full'><AiOutlineMenu className=' m-2' /></div><div className=' hover:bg-slate-300 rounded-full h-10'><Back /></div></div>
       <div className=' mt-7  flex ml-[20%] w-7/12 text-neutral-500 border-2 rounded-full text-8xl items-center'><div className=' m-3 text-blue-400 '><CgProfile /></div><div className=' text-lg font-bold ml-3'><p>Account Name</p><p>- Mentor/Mentee/Admin</p></div></div>
       <div className=' border-4 border-slate-200 text-neutral-500 rounded-3xl w-7/12 mt-16 ml-[20%]'>
        <h1 className=' m-3 font-bold text-3xl '>Personal Information</h1>
        <p className=' m-5 mt-10 font-medium text-xl'>Name: abcxyz</p>
        <p className=' m-5 font-medium text-xl'>Email: abcxyz@email.com</p>
        <p className=' m-5 font-medium text-xl'>PhoneNumber: xxx-yyy-zzz.com</p>
        <h1 className=' m-3 font-bold text-3xl mt-16'>Class Created:</h1>
        <h1 className=' m-3 font-bold text-3xl mt-16'>Class Joined:</h1>
       </div>
    </div>
)

export default Profile;













