import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
    const navigate=useNavigate()
    const state=useSelector((state)=>state.blogg.blogs)
  return (
    <div>
      <h1>BLOGS</h1>
      <button onClick={()=>navigate("/forms")}>Add</button>
      {state.map((item)=>(
        <ul key={item.id}>
<li>
    <Link to={`/details/${item.id}`}>{item.text}</Link>
    </li>
        </ul>

     ))}
    </div>
  )
}

export default Home
