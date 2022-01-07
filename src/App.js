import React,{useState} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  
  
  const [pika,setPika]= useState("")
  
  const getData=()=>{

    axios.get('https://randomuser.me/api/')
    .then((evt)=>{
      setPika(JSON.stringify(evt))
      console.log(evt)
    
  
    })
  
  }
  

  return (
    <div className="App">
    
<p>{pika}</p>

<button onClick={getData}>get data</button>
    </div>
  );
}

export default App;
