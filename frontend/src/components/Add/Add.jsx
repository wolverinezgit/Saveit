


import "../Add/Add.css"

import React,{useState} from 'react'


function Add() {

    const [title,settitle]=useState("")
     const handleTitle=(e)=>{
    settitle(e.target.value)
   
    
    }
    const [desc,setdesc]=useState("")
    const handledesc=(e)=>{
   setdesc(e.target.value)
  
   
   }
    const add=()=>{
    
        alert(title);
        
    }
  return (
    <div className="Add">
        


        <input
        name="tit"
        placeholder="Title"
        // value={card.title}
        onChange={handleTitle}

        />
        <textarea name="description" 
        value={desc} 
        onChange={handledesc}/>
        
        <button onClick={add}>Add</button>
        </div>
  )
}

export default Add