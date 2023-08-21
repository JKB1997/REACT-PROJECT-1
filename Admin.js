import React from 'react'
import '../App.css'
import { AccesContext } from '../Context/UseContext'
import { Link } from 'react-router-dom';
function Admin() {
    const {user}=AccesContext();
    console.log(user)
  return (
    <div>
        <h1>Admin </h1>
        <Link to='/Registration1'>Register Page</Link>
        <br />
        <Link to='/login'>Login</Link>
        {
               user.length==0?<>
                  <p>No user List</p>
               </>:<>
                     <table >
                         <thead>
                            <th>SL</th>
                            <th>Email</th>
                            <th>Password</th>
                         </thead>
                         <tbody>
                            {
                                user.map((data,i)=>{
                                   
                                    return <tr key={i}>
                                         <td>{i+1}</td>
                                         <td>{data.email}</td>
                                         <td>{data.password}</td>
                                    </tr>
                                })
                            }
                             
                         </tbody>
                     </table>

                 
               </>          
        }


    </div>
  )
}

export default Admin