import { Link } from 'react-router-dom';
import React, { useEffect, useState,useContext } from 'react'
import { IconButton, Stack ,Tooltip,Typography} from '@mui/material'
import Menu from './Menu'
import { CounterContext } from './context/count';
import AssistantIcon from '@mui/icons-material/Assistant';


const Navbar = () => {

  let auth=JSON.parse(sessionStorage.getItem("user"));
  const counterContext=useContext(CounterContext);
  useEffect(()=>{
    auth=JSON.parse(sessionStorage.getItem("user"));
  },[6])

  return(
    <Stack 
      direction="row" 
      justifyContent="space-around" 
      sx={{ 
        gap: { sm: '123px', xs: '40px' }, 
        mt: { sm: '32px', xs: '20px' }, 
        justifyContent: 'none' }} 
        px="20px"
        style={{height:'20px',display:'flex',alignItems:'center'}}>
      <Link to="/" style={{fontSize:'30px',color:'black'}}>
        FITHUB
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontFamily="Alegreya"
        fontSize="24px"
        alignItems="flex-end"
      >
        <Link to="/" style={{ 
          textDecoration: 'none', 
          color: '#3A1212', 
          borderBottom: '3px solid blue' }}>Home</Link>
        <a href="/" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a>
        <Link to="/products" style={{ 
          textDecoration: 'none', 
          color: '#3A1212',  }}>Products</Link>



          {auth && auth.result ?
          <>
         <Link to='/chats'>
         <Tooltip title="ChatUs" arrow>
             <button className='btn1'>
              <AssistantIcon/>
              </button>
              </Tooltip>
         </Link> 
          <Menu/>

          </>
          
            
          :<>
             
            <Link to='/register'>
                <button style={{backgroundColor:'black',color:'white',padding:'10px',marginLeft:'900px',fontSize:'20px'}}>Register</button>
            </Link></>}

            
      </Stack>
    </Stack>
  );
}
  
  
  

export default Navbar;