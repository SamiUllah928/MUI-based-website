import React from 'react'
import './App.css'
import Signup from './Component/Forms/Signup'
import Login from './Component/Forms/Login'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Component/Home/Home'
import Footer from './Component/Footer/Footer'
import Header from './Component/Home/Header'
import Cart from './Component/Cart/Cart'

export default function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/footer' element={<Footer/>}/>
      </Routes>
      </BrowserRouter>
     {/* <Variable/>
     <Signup/>
     <Login/> */}
    </div>
  )
}
