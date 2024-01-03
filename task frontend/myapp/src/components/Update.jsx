import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {

const {id}=useParams()
console.log(id);
    const [alltask,setAlltask]=useState([])

  const [onlytask,setOnlytask]=useState([])
    
    const [title,setTitle]=useState('')
    const[description,setDescription]=useState('')
    const [date,setDate]=useState('')
    const [status,setStatus]=useState(false)
    const nav=useNavigate()



    useEffect(() => {
      
  axios.get(`http://localhost:5000/getone/${id}`).then((response)=>{
    setAlltask(response.data)
    })
 
    }, [])




console.log(alltask);




const tosend=async(e)=>{
    e.preventDefault()     
  
    await axios.put(`http://localhost:5000/updatetask${id}`,{
    title:title,
    description:description,
    date:date,
    status:status
   
   })


nav('/')
console.log(alltask);
}

  return (
    <div>
add new task






<form  >

<input type='text'  placeholder='title'  value={title}  onChange={(e)=>setTitle(e.target.value)}  />

<input  type='text' placeholder='description' value={description}  onChange={(e)=>setDescription(e.target.value)}  />



<label>status  <input type='checkbox' placeholder='status'   onChange={()=>setStatus(true)} /></label>


<input type="date"   value={date} onChange={(e)=>setDate(e.target.value)}  placeholder='date'/>



<button  onClick={(e)=>tosend()} > submit</button>




</form>


    </div>
  )
}

export default Update