import React from 'react';
import './App.css';

import Jkb from './form';



import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Pages
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Error from './Pages/Error';
import Admin from './Pages/Admin';
import Profile from './Pages/Profile';


import Navbar from './Component/Navbar';
import Register from './Pages/Registration1';
import Protected from './Component/Protected';
import { Link } from 'react-router-dom';
import { AccesContext } from './Context/UseContext';

function App() {
    const {isLogged}=AccesContext();
     console.log(isLogged)
  return (
    <div >
  <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Protected login={isLogged} />}>
          <Route  path='/home' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/user/profile' element={<Profile />}></Route>
        </Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Registration1' element={<Register />}></Route>
        <Route path='*' element={<Error />}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
      </Routes>


      </BrowserRouter>






    </div>
  );
}

export default App;






