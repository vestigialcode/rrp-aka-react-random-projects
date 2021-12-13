import React,{useState} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  
  const [state,setState]=useState("")
  const [pika,setPika]= useState("")
  
  const getData=()=>{

    axios.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json')
    .then((evt)=>{setPika(evt.data[5].name);
    
  
    })
  
  }
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
<p>{pika}</p>
<image href='https://s3-ap-southeast-1.amazonaws.com/he-public-data/Richard%20Mathew3350914.jpg'></image>

<button onClick={getData}>get data</button>
    </div>
  );
}

export default App;
