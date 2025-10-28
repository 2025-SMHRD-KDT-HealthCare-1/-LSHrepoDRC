import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Home from '../component/Home'
import Login from '../component/Login'
import Join from '../component/Join'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/Home' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/join' element={<Join></Join>}></Route>
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
