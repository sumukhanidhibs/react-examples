import { useState } from "react"
import "./styling.css"

function App() {
  let [toggle, setToggle] = useState(true)
  let [count, setCount] = useState(5)
  return (
    <div className="hello">
      <h1>{count}</h1>
      <button type='button' onClick={() => {
        setToggle(!toggle)
        if (toggle == true) {
          setCount(count = 5)
        } else {
          setCount(count = 7)
        }
      }}>Toggle</button>
    </div>
  )
}

export default App
