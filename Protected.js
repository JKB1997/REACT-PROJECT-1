import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import Home from '../Pages/Home';

function Protected(props) {
  const login=props.login;
  console.log(login)
  if(login){
     return (
       <> 
        
        <Outlet/>
       </>
     )
  }else{
    return  <Navigate to='/Login'></Navigate>
     
      
  }
    
}

export default Protected;