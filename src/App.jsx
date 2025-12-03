import { useState } from 'react'
import './App.css'
import Counter from './Features/Counter/Counter'
import Test from './Test'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 style={{color:"red"}}>Redux</h1>
    <Counter/>
    <Test/>
    </>
  )
}

export default App
