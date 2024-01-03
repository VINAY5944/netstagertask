import axios from 'axios'
import React, { useState } from 'react'
import { Form, useNavigate } from 'react-router-dom'

const Newtask = () => {

const [title,setTitle]=useState('')
const[description,setDescription]=useState('')
const [date,setDate]=useState('')
const [status,setStatus]=useState(false)
const nav=useNavigate()

const tosend=async(e)=>{
    e.preventDefault()     
  
axios.post(`http://localhost:5000/newtask`,{
    title:title,
    description:description,
    date:date,
    status:status
   
   })


nav('/')
    console.log(title);
    console.log(description);
    console.log(date);
    console.log(status);
}


  return (
    <div>
add new task
<form>

<input type='text'  placeholder='title'  value={title}  onChange={(e)=>setTitle(e.target.value)}  />

<input  type='text' placeholder='description' value={description}  onChange={(e)=>setDescription(e.target.value)}  />



<label>status  <input type='checkbox' placeholder='status'   onChange={()=>setStatus(true)} /></label>


<input type="date"   value={date} onChange={(e)=>setDate(e.target.value)}  placeholder='date'/>



<button  onClick={tosend} > submit</button>

</form>




    </div>
  )
}

export default Newtask