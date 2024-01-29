import { useState } from 'react'
import Buttons from './button';

function App() {
  let [color, setColor] = useState("olive");
          <button className='w-20 h-10 rounded-md' style={{backgroundColor:"Aquamarine"}} onClick={(e)=>setColor(`${e.target.style.backgroundColor}`)}>hello</button>
          let colorset = ['Salmon','DarkCyan','CadetBlue','Crimson','Aquamarine']
  return (
    <div>
      <div className='flex flex-col  w-screen h-screen  justify-end items-center p-8' style={{ backgroundColor: color }}>
          <div className="flex flex-wrap justify-center gap-5 bg-white rounded-2xl py-2 px-8 shadow-xl">

          <button className='px-3 py-1 rounded-xl' style={{backgroundColor:colorset[0]}} onClick={(e)=>setColor(`${e.target.style.backgroundColor}`)}>{colorset[0]}</button>

          <button className='px-3 py-2 rounded-md' style={{backgroundColor:colorset[1]}} onClick={(e)=>setColor(`${e.target.style.backgroundColor}`)}>{colorset[1]}</button>

          <button className='px-3 py-2 rounded-md' style={{backgroundColor:colorset[2]}} onClick={(e)=>setColor(`${e.target.style.backgroundColor}`)}>{colorset[2]}</button>

          <button className='px-3 py-2 rounded-md' style={{backgroundColor:colorset[3]}} onClick={(e)=>setColor(`${e.target.style.backgroundColor}`)}>{colorset[3]}</button>

          <button className='px-3 py-2 rounded-md' style={{backgroundColor:colorset[4]}} onClick={(e)=>setColor(`${e.target.style.backgroundColor}`)}>{colorset[4]}</button>
          </div>
      </div>
    </div>
  )
}

export default App;
