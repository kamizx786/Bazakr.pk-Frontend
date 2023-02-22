import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Header from './Components/Header'
import './index.css'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Signup from './Pages/Signup'
function App() {


  return (
    <div>
      <Header/>
    <ToastContainer />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/Login" element={<Login/>} />
        <Route eaxct path="/Register" element={<Register/>} />
        <Route eaxct path="/Signup" element={<Signup/>} />
      </Routes>
   </div>
  )
}

export default App
