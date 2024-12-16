import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { save } from '../Redux/Toolkit/Counter/Counter'
import {  useNavigate } from 'react-router-dom'

const Firstpage = () => {
  const navigate=useNavigate()
    const dispatch=useDispatch()
    const [title,settitle]=useState("")
    const[detail,setdetail]=useState("")
    const[color,setcolor]=useState("#ffffff")
    const saving=()=>{
dispatch(save({title,detail,color}))
settitle("")
setdetail("")
setcolor("#ffffff")
navigate("/")

    }
  return (
    <div>
      <input type="text" value={title} onChange={(evt)=>settitle(evt.target.value)} />
      <input type="text" value={detail} onChange={(evt)=>setdetail(evt.target.value)}/>
      <input type="color" value={color} onChange={(evt)=>setcolor(evt.target.value)}/>
      <button onClick={saving}>save</button>

    </div>
  )
}

export default Firstpage
