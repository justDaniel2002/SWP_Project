import React from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import {CgProfile} from "react-icons/cg";
import { AiOutlineSend } from "react-icons/ai";


const Classroom = ()=>(
    <div>
       <div className=' border-b-2 flex w-screen items-center flex-row justify-between'>
          <div className='flex items-center'><AiOutlineMenu className=' m-3 ml-12 text-3xl' /><p className=' text-3xl'>Class_Name</p></div>
          <div className='flex'>
          <div className='font-semibold'>Post</div>
          <div className=' mr-20 ml-20 font-semibold'>File</div>
          <div className='font-semibold mr-52'>Member</div>
          </div>
          <CgProfile className=' content-start text-6xl mr-20' />          
       </div>
       <div className=' mt-12 ml-[25%] min-w-fit w-8/12 flex items-center border-2 shadow-lg border-neutral-300 rounded-full'>
         <CgProfile className='m-2 text-blue-700 text-5xl' /><p className=' m-3'>Post something to your class</p>
       </div>
       <div className=' absolute left-20 w-fit flex flex-col rounded-2xl border-2 border-neutral-300'>
         <p className='m-3 font-semibold'>Schedule</p>
         <p className='ml-4 opacity-50'>Nothing</p>
         <p className=' ml-28 m-3 text-blue-500'>View Full</p>
       </div>
       <div className='mt-10 ml-[25%] w-8/12 border-2 shadow-lg border-neutral-300 rounded-xl'>
       <div className='flex items-center'>
         <CgProfile className='m-2 text-blue-700 text-5xl' />
         <div className='m-1'><p className=' font-semibold'>Account_Name</p><p className=' text-sm opacity-50'>Post Date</p></div>
      </div>
       <p className='m-3 ml-5 font-medium'>First Post</p>
       <div className='flex items-center border-t-2 text-blue-700'><CgProfile className=' text-4xl m-3'/> 
       <textarea name="comment" cols="100" className=' border-2 rounded-3xl h-8 text-black m-1 px-3 py-0.5 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' placeholder='your comment'></textarea>
       <AiOutlineSend className=' mx-5 text-3xl hover:text-blue-400' />
       </div>
       </div>    
    </div>
)

export default Classroom;












