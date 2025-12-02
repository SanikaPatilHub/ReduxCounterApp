
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,reset} from "./CounterSlice"

export default function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
//testing
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          style={{marginRight:"20px",backgroundColor:"pink"}}
        >
          Increment
        </button>
        //hii
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          style={{marginRight:"20px", color:"white", backgroundColor:"navy",marginLeft:"5PX"}}
        >
          Decrement
        </button>

      
        <button aria-label="Decrement value"
        style={{marginRight:"20px",backgroundColor:"yellow"}}
          onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  )
}