import React from 'react';
import image from './happy logo.png';
import Nav from "./Nav.js";
import * as ReactDOM from 'react-dom';
import { Button } from './Body';
import Formadd from './FormAdd.js';
import { Formjoin } from './FormAdd.js';


const ShowFormAdd = () =>{
     var HP = document.getElementById('HomePage');
    // const div = document.createElement('div')
    // div.id = 'FormAdd'
    // HP.appendChild(div)
    // ReactDOM.render(<Formadd />, document.getElementById('FormAdd'))
    ReactDOM.render(ReactDOM.createPortal(<Formadd />, HP), document.createElement('div'))
    
}

const ShowFormJoin = () =>{
    var HP = document.getElementById('HomePage');
    ReactDOM.render(ReactDOM.createPortal(<Formjoin />, HP), document.createElement('div'))
}

const HomePage = () => (
    <div id="HomePage" className=''>
      <Nav />
      <img className='m-auto w-44 mt-64' src={image} />
      <div className=' absolute left-[30%] bottom-[15%] drop-shadow-xl'><button className=' bg-slate-300 pl-3 pr-3 rounded-lg font-bold text-3xl italic p-1 mr-40 hover:bg-white'
      onClick={ShowFormAdd}>Create Class</button>
         <button onClick={ShowFormJoin} className=' bg-slate-300 pl-3 pr-3 rounded-lg font-bold italic p-1 text-3xl hover:bg-white' >Join Class</button></div>
    </div>
)


export default HomePage