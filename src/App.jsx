import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(0)
  let [oddeven , setOddeven] = useState("Even")
  const oddEven = () =>{
    
    if(counter%2==0){
      oddeven = "Even"
    }
    else{
      oddeven = "Odd"
    }
    setOddeven(oddeven)
  }
  const addValue = () =>{
    counter = counter+1;
    if(counter>20){
      counter=20;
    }

    setCounter(counter)
    console.log("button clicked",counter)
  }

  const removeValue = () =>{
    counter = counter-1;
    if(counter<0){
      counter=0;
    }
    setCounter(counter)
    console.log("remove button clicked",counter)
  }

  return (
    <>
    <h1>Counter Practice</h1>
    <h2>Counter Value : {counter}</h2>
    <button onClick={addValue}>Add Value</button>
    <br />
    <br />
    <button onClick={removeValue}>Remove Value</button>
    <br />
    <br />
    <button onClick={oddEven}>Odd/Even</button>
    <p>Its an {oddeven}</p>
    </>
  )
}

export default App
