import React from 'react';
import Nav from './Nav';
import {CgProfile} from "react-icons/cg";
import { Line } from 'react-chartjs-2'
import{
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from 'chart.js'

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)

function Admin(){
  const Labels= ["-6days","-5days","-4days","-3days","-2days","yesterday","today"]
  const data ={
    labels: Labels,
    datasets:[{
      label: "Recent Posts",
      data:[11, 4, 7, 12, 19, 10, 5],
      backgroundColor:'transparent',
      borderColor:"blue",
      pointBorderColor:'transparent',
      pointBorderWidth: 4,
      tension: 0.3
    }]
  }

  const options ={
    plugins: {
      legend: false,
      title:{
        display: true,
        text:"Recent Posts"
      }
    },
    scales: {
      y:{
        min: 0,
      }
    }
  }

  return(
    <div className='m-5'>
    <div className=' bg-gray-200 w-11/12 m-auto'>
       <p className=' font-bold text-2xl px-5 py-2 border-b-2 bg-blue-700 text-white border-white '>Dashboard</p>
       <div className='grid grid-flow-row grid-cols-4 gap-4 border-b-4 bg-white py-5 border-white'>
        <div className=' rounded-lg  bg-blue-500'><p className='text-white font-light text-lg px-3 py-3 '>Accounts</p>
        <div className=' rounded-lg text-white bg-blue-600 text-sm font-normal px-3 py-3'><p>Mentors: 0</p><p>Mentee: 0</p></div>
        </div>
        <div className=' rounded-lg  bg-yellow-500'><p className='text-white font-light text-lg px-3 py-3 '>Classes</p>
        <div className=' rounded-lg text-white bg-yellow-600 text-sm font-normal px-3 py-3'><p>Created by Mentor: 0</p><p>Created by Mentee: 0</p></div>
        </div>
        <div className=' rounded-lg  bg-green-500'><p className='text-white font-light text-lg px-3 py-3'>Banned</p>
        <div className=' rounded-lg text-white bg-green-600 text-sm font-normal px-3 py-3'><p>Banned: 0</p><p>Warning: 0</p></div>
        </div>
       </div>

       <div>
          <p className=' text-lg font-medium px-3 py-3'>DataTable</p>
          <div className='bg-white py-2 px-2 font-medium'>
            <div className=' font-light'>
            ShowBy: <select className=' inline-block border-2 mr-96'>
              <option>Accounts</option>
              <option>Classrooms</option>
              <option>Mentors</option>
              <option>Mentees</option>
              <option>Banned</option>
            </select>
            Search: <input type='text' className='border-2'/>
            </div>
            
            
            <table className='border-2 mx-5 my-5 text-sm'>
              <thead>
                
              <tr className='border-2'>
                <td className='border-2 p-2 pr-40'>Name</td>
                <td className='border-2 p-2 pr-40'>infomation</td>
                <td className='border-2 p-2 pr-40'>Role</td>
                <td className='border-2 p-2 pr-40'>Function</td>
              </tr>
              </thead>
            </table>
          </div>
       </div>
        
       <div className='bg-white my-10 py-4 text-white font-light '>
        <div className=' text-black w-7/12 h-96 m-10'>
         Recent Posts:
         <Line data={data} options={options}/>

        </div>
        <div className='text-black px-2 pb-5'>
        Time:<select className='border-2'>
          <option>Today</option>
          <option>Few Days Ago</option>
          <option>Last Week</option>
        </select>
        </div>
        <div className='grid grid-flow-col gap-3 grid-cols-5'>
        <div className='px-3 py-2 bg-orange-300 rounded-xl'>Posts: 0</div>
        <div className='px-3 py-2 bg-orange-400 rounded-xl'>Accounts Created: 0</div>
        
        </div>
        
       </div>
    </div>
  </div>
  )
}

export default Admin