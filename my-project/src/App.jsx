import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Header from './Components/Header'
import './index.css'
import Home from './Pages/Home'
import Login from './Pages/Auth/Login'
import Register from './Pages/Auth/Register'
import Signup from './Pages/Auth/Signup'
import Store from './Pages/Store/Store'
import StoreProfile from './Components/CreateStore/StoreProfile'
import StoreTime from './Components/CreateStore/StoreTime'
import StoreLinks from './Components/CreateStore/StoreLinks'
import ForgotPassword from './Pages/Auth/ForgotPassword'

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
        <Route exact path="/forgotpassword" element={<ForgotPassword/>}/>
        <Route eaxct path="/Store" element={<Store/>} />
        <Route eaxct path="/StoreProfile" element={<StoreProfile/>}></Route>
        <Route eaxct path="/StoreTime" element={<StoreTime/>}></Route>
        <Route eaxct path="/StoreLinks" element={<StoreLinks/>}></Route>
      </Routes>
   </div>
  )
}

export default App
