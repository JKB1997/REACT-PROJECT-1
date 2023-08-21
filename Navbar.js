import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import { AccesContext } from '../Context/UseContext'

function Navbar() {
  const { LogoutDispatch } = AccesContext();

  const LogoutHanlder = (e) => {
    e.preventDefault();
    LogoutDispatch();
    localStorage.removeItem('user');
  }
  return (

    <div>
      <nav class="navbar navbar-expand-lg bg-primary">
        <div class="container-fluid">
          <Link to='/home' className='navbar-brand'>LSD</Link>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to='/home' className='nav-link active'>Home</Link>

              </li>
              <li class="nav-item">
                <Link to='/contact' className='nav-link '>Contact</Link>
              </li>
              <li class="nav-item">
                <Link to='/about' className='nav-link '>About</Link>
              </li>
              <li class="nav-item">
                <Link to='/user/profile' className='nav-link '>Profile</Link>
              </li>



            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-success" type="submit">Search</button>
              <ul className="navbar-nav mx-3">
                <li class="nav-item">
                  <button onClick={(e) => LogoutHanlder(e)} className='btn btn-primary'>Logout</button>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>



    </div>

  )
}

export default Navbar;