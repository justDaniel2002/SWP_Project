import React from 'react';
import image from './Component 13.png';
import ReactDOM from 'react-dom';

const test = ()=>{
       return ReactDOM.createPortal(<h1>Hello</h1>, document.getElementById('Footer'))
}

 const Button = () => (
    
         <div className=' absolute left-[37%] bottom-[-60%] drop-shadow-xl'><button className=' bg-slate-300 pl-3 pr-3 rounded-lg font-bold italic p-1 mr-40 hover:bg-white'>Create Class</button>
         <button  className=' bg-slate-300 pl-3 pr-3 rounded-lg font-bold italic p-1 hover:bg-white'>Join Class</button></div>
    
)
const Body = () => (
    <div>
        <div className=' drop-shadow-xl'>
        <img className=' float-right text-xs mr-28 mt-20 w-4/12' src={image} />
        <button type='button' 
        className=' italic font-extrabold bg-indigo-900 ml-[45%] mt-3 text-slate-200 p-2 pl-8 pr-8 rounded-2xl hover:bg-indigo-700'>SIGN UP</button>
        </div>
        
         <div id='Footer' onClick={test}>
            <p className=' text-center mt-12 text-lg font-serif underline'>Contact info <br></br><br></br> Email: abc-xyz-@gmail.com <br></br><br></br>Hotline: xxx-xxx-xxx</p>
         </div>

    </div>
)



export default Body;
export {Button};


