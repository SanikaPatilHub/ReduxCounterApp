import { useState } from 'react'
import './App.css'
import Counter from './Features/Counter/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 style={{color:"red"}}>Redux</h1>
    <Counter/>
    </>
  )
}

export default App
