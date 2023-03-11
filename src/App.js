import React, { useState } from 'react'
import './App.css';

function App() {
  const[value,setValue]= useState("")
  
  const number =(event)=>{
    setValue(value.concat(event.target.value))
  }

  const ecqua=()=>{
 setValue("")
  }
const multiple=()=>{
  setValue(eval(value).toString())
}

  return (
    <div className='center' >
    <div className='main'>
    <input type="text" placeholder="0" id='answer' value={value}/>
    <input type="button" value = "9" onClick={number}  className="button"/>
     <input type="button" value = "8"onClick={number} className="button"/>
      <input type="button" value = "7" onClick={number}className="button"/>
       <input type="button" value = "6" onClick={number} className="button"/>
        <input type="button" value = "5" onClick={number} className="button"/>
         <input type="button" value = "4" onClick={number} className="button"/>
          <input type="button" value = "3" onClick={number} className="button"/>
           <input type="button" value = "2" onClick={number} className="button"/>
            <input type="button" value = "1" onClick={number} className="button"/>
            <input type="button" value = "0" onClick={number} className="button"/>
             <input type="button" value = "/" onClick={number} className="button"/>
             <input type="button" value = "+" onClick={number} className="button"/>
             <input type="button" value = "-" onClick={number} className="button"/>
             <input type="button" value = "%" onClick={number} className="button"/>
             <input type="button" value = "*" onClick={number} className="button"/>
             <input type="button" value = "." onClick={number} className="button"/>
             <input type="button" value = "=" onClick={multiple}className="button1"/>
             <input type="button" value = "clear" onClick={ecqua} className="button1"/>

            

    </div>
    </div>
  )
}

export default App