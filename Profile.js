import React from 'react'
import Navbar from '../Component/Navbar'
function Profile() {
  const user=localStorage.getItem('user');
console.log(user)
  return (
    <div>
        <Navbar/>
            <h1>Name-{user}</h1>
          
    </div>
  )
}

export default Profile