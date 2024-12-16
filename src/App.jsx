import React from 'react'
import Toolkit from './components/Toolkit'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Firstpage from './components/Firstpage'
import Home from './components/Home'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/forms' element={<Firstpage/>}/>
<Route path='/details/:id' element={<Toolkit/>} />
      </Routes>
     

     
      </BrowserRouter>
    </div>
  )
}

export default App
