import React,{useState} from 'react';
import './App.css';

function App() {
  const [state,setState]=useState("")
  const clickHandler=()=>{
if(state === ""){
  setState("Hello There.. how you doing")
}else{
  setState("")
}
  }
  return (
    <div className="App">
     <p>{state}</p>
     <button  onMouseMoveCapture={clickHandler}>come here</button> 
    </div>
  );
}

export default App;
