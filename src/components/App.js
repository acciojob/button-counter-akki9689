
import React from "react";
import './../styles/App.css';
import { useState } from "react";

const App = () => {
  const [count,setCount]=useState(0)
  const inc=()=>{
    if(count >0){
      setCount(count+1)
    }
  }
  return (
    <div>
      <p>Button clicked {count} times.</p>
        <button onClick={inc}>Click me</button>
    </div>
  )
}

export default App
