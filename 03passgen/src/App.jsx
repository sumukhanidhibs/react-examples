import { useRef } from 'react'
import { useEffect } from 'react'
import { useState, useCallback } from 'react'


function App() {
  let [length, updatelenth] = useState(8)
  let [checkNum, updateNum] = useState(false)
  let [checkChar, updateChar] = useState(false)
  let [password, setPassword] = useState('')

  // ref hook
  let passref =useRef(null)
  
  let copytoclipboard = useCallback(()=>{
    window.navigator.clipboard.writeText(password)
    passref.current?.select()
    // passref.current?.setSelectionRange(0,4)
  },[password])

  let passwordGen = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let pass = ""

    if (checkNum) {
      str += "01223456789"
    }
    if (checkChar) {
      str += "!@#$%^&*(){}[]?><"
    }

    for (let i = 0; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(index)
    }
    setPassword(pass)
  }, [checkNum, checkChar, length, setPassword])

  useEffect(() => {
    passwordGen()
  }, [checkNum, checkChar, length])

  return (
    <>
      <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-5 my-8 text-orange-500 bg-gray-600">
        <h1 className='text-center text-3xl text-sky-500 uppercase shadow-xl bg-transparent'>Password Generator</h1>
        <div className="flex shadow-lg overflow-hidden rounded-lg my-5">
          <input type="text" placeholder='password' value={password} readOnly className='outline-none w-full py-1 px-3' ref={passref}/>
          <button onClick={copytoclipboard} className='text-white bg-sky-600 px-4 py-1 hover:bg-sky-800'>Copy</button>
        </div>
        <div className="flex gap-x-4 text-lg">
          <input type="range" defaultValue={8} min={6} max={24} className='cursor-pointer' onChange={(e)=> updatelenth(e.target.value)}/>
          <span>lenth: {length}</span>
          <input type="checkbox" defaultValue={checkNum} onChange={()=>updateNum((prev)=>!prev)}/>
          <label>Numbers</label>
          <input type="checkbox" defaultValue={checkChar} onChange={()=>updateChar((prev)=>!prev)}/>
          <label>Characters</label>
        </div>
      </div>

    </>
  )
}

export default App