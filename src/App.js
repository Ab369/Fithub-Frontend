
import React, { useEffect } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Products from './components/Products'
// import Navbar from './components/TTTTTNavbar'
import SignIn from './components/SignIn'
import Register from './components/Register'
import Cart from './components/Cart'
import Orders from './components/Orders'
import Chat from './components/Chat'
import {Box} from '@mui/material'
import { ToastContainer } from 'react-toastify'

import './App.css';
import ExerciseDetail from './pages/ExerciseDetail'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>  
    <Box>  
         <Navbar/>    
         <Routes>
            <Route path="/" element={<Home />} />
             <Route path='/products' element={<Products/>}/>
             <Route path='/signin' element={<SignIn/>}/>
             <Route path='/register' element={<Register/>}/>
             <Route path='/cart/:id' element={<Cart/>}/>
             <Route path='/orders/:id' element={<Orders/>}/>
             <Route path='/chats' element={<Chat/>}/>
            <Route path="/exercise/:id" element={<ExerciseDetail />} />
         </Routes>
    </Box>
    <ToastContainer position='top-center' theme='dark'/>
 </BrowserRouter>
  );
}

export default App;
