import React, { useEffect, useState } from 'react'

function Project() {
  const data = {name:"",email:"",mob:"",password:"",}
  const [inputData,setInputData] = useState(data);
  const [Flag,setFlag] = useState(false)
  useEffect(()=>{
    console.log("Registered")
  },[Flag])
  function handleData(e){
    setInputData({...inputData,[e.target.name]:e.target.value})
  }
  function handelSubmit(e){
    e.preventDefault();
    if(!inputData.name || !inputData.email || !inputData.password){
      alert("All Fields Are Mandtatory")
    }
    else{
      setFlag(true);
    }
  }
  return (
    <>
    <pre>{(Flag)?<h2 className='ui-defined'>Hello {inputData.name},You have loged in Successfully</h2>:""}</pre>
    <form className='Container' onSubmit={handelSubmit}>
        <div className='Header'>
            <h1 align="center"><b>Registration Form</b></h1>
        </div>
        <div>
                       <p className="Name"> Name: <input type = "text" placeholder='Enter Your Name' name='name' id ="nam" value={inputData.name} onChange={handleData}></input></p>
                       <p className="Name">Email: <input type = "E-mail" placeholder='name@gmail.com' name="email" id="email" value={inputData.email} onChange={handleData}></input><br/></p>
                       <p className="Name">Mobile: <input type = "Number" placeholder='Enter Your Number' name= "mob" id="Mob" value={inputData.mob} onChange={handleData}></input><br/></p>
                       <p className="Name">Password: <input type = "Password" placeholder='Enter Password' name="password" id="Password" value={inputData.password} onChange={handleData}></input><br/></p>
                       <p className="Name"> <button type='submit' id = "Submit"><b>Login</b></button></p>
        </div>
        
        </form>
        </>
  )
}

export default Project;