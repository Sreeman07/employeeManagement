import {useContext} from 'react'
import { counterContextObj } from '../context/ContextProvider'
import { useCounterStore } from '../store/useCounterStore'

function Home() {
  let {newcounter,incrementCounter}=useCounterStore()
 const {counter,changeCounter}=useContext(counterContextObj)
  return (
    <div>
      <h1 className='text-4xl'>Counter:{counter}  </h1>
      <button onClick={changeCounter} className="bg-blue-600 p-5">increase</button>
    </div>
  )
}

export default Home