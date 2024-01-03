import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
const Alltask = () => {

const [alltask,setAlltask]=useState([])

useEffect(() => {
  
axios.get('http://localhost:5000/getall').then((response)=>{
setAlltask(response.data)
})


}, [])


console.log(alltask);




const del=async(e)=>{


axios.delete(`http://localhost:5000/deletetask/${e}`)



}

  return (





    <div>

<table>
<th>title</th>
<th>description</th>
<th>date</th>
<th>status</th>
<th>delete</th>
<th>upddate</th>
        {alltask.map((item,index)=>(
<>

<tr  key={index}>
<td>{item.title}</td>
<td>{item.description}</td>
<td>{item.date}</td>
<td>{item.status==true?'completed':'uncomplete'}</td>
<td> <button  value={item._id}  onClick={(e)=>del(e.target.value)}  > delete</button>  </td>
<td><Link to={`/update/${item._id}`}  > update</Link>   </td>
</tr>





</>



        ))}




</table>
<Link  to={'/createnew'}  >create new</Link>
    </div>
  )
}

export default Alltask