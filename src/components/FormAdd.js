import {CgProfile} from "react-icons/cg";
import React from 'react';

const Formadd = () => (
    <React.Fragment>
    <div className=" absolute w-screen right-0 top-0 h-screen bg-black opacity-30"></div>
    <div className=" z-50 absolute border-1 border-black ml-[32%] w-4/12 h-3/6 top-40 rounded-3xl bg-white">

        <div className=" text-7xl m-4 flex items-center"><CgProfile /><p className=" text-xl font-bold m-2">Account Name</p></div>
        <form className=" ml-[20%]">
            <input name="Classname" placeholder="ClassName" className=" p-1 rounded-xl bg-gray-200 text-gray-600 text-lg font-medium"></input><br/><br/>
            <input name="Subject" placeholder="Subject" className=" p-1 rounded-xl bg-gray-200 text-gray-600 text-lg font-medium"></input><br/><br/>
            <input name="Code" placeholder="Code" className=" p-1 rounded-xl bg-gray-200 text-gray-600 text-lg font-medium"></input><br/><br/>
            <div className=" flex">
            <input type="submit" value="Cancle" className=" mt-3 p-1 pl-5 pr-5 shadow-xl rounded-xl bg-gray-200 text-gray-600 text-lg font-medium ml-[-10%]"></input>
            <input type="submit" value="Create" className=" mt-3 p-1 pl-5 pr-5 shadow-xl rounded-xl bg-gray-200 text-gray-600 text-lg font-medium ml-[45%]"></input><br/>
            </div>
        </form>
        
    </div>
    </React.Fragment>
    
)

const Formjoin = ()=>(
    <React.Fragment>
    <div className=" absolute w-screen right-0 top-0 h-screen bg-black opacity-30"></div>
    <div className=" z-50 absolute border-1 border-black ml-[32%] w-4/12 h-3/6 top-40 rounded-3xl bg-white">

        <div className=" text-7xl m-4 flex items-center"><CgProfile /><p className=" text-xl font-bold m-2">Account Name</p></div>
        <form className=" ml-[20%]">
            <input name="Classname" placeholder="ClassName" className=" p-1 rounded-xl bg-gray-200 text-gray-600 text-lg font-medium"></input><br/><br/>
           
            <input name="Code" placeholder="Code" className=" p-1 rounded-xl bg-gray-200 text-gray-600 text-lg font-medium"></input><br/><br/>
            <div className=" flex">
            <input type="submit" value="Cancle" className=" mt-3 p-1 pl-5 pr-5 shadow-xl rounded-xl bg-gray-200 text-gray-600 text-lg font-medium ml-[-10%]"></input>
            <input type="submit" value="Join" className=" mt-3 p-1 pl-5 pr-5 shadow-xl rounded-xl bg-gray-200 text-gray-600 text-lg font-medium ml-[45%]"></input><br/>
            </div>
        </form>
        
    </div>
    </React.Fragment>
)

export default Formadd;
export {Formjoin};