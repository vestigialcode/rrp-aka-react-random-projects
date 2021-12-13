import React,{useState} from 'react';
import './App.css';

function App() {
  const [state,setState]=useState("")
  const clickHandler=()=>{
if(state === ""){
  setState("Hello World")
}else{
  setState("")
}
  }
  return (
    <div className="App">
     <p>{state}</p>
     <button onClick={clickHandler}>Click here</button>
    </div>
  );
}

export default App;
