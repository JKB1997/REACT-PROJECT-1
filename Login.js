import React, { useState } from "react";
import Navbar from "../Component/Navbar";
import { Link } from "react-router-dom";
import { AccesContext } from "../Context/UseContext";
import { useNavigate } from "react-router-dom";
import { useJwt } from "react-jwt";
import {MyKey} from '../Secret_key'

function Login() {
  const Navigate = useNavigate();
  const { user, LoginDispatch } = AccesContext();

  const [client, setUser] = useState({});

  const LoginHandler = () => {
    console.log(client)
    console.log(user)
    let isExist = null;
    user.map((userList) => {
      if (userList.email == client.email) {
        if (userList.password == client.password) {
          isExist = "User Exit"
          return
        }

      }
    })
    console.log(isExist)
    const name={
       fname:"Jk",
       email:"Jk@"

    }
    if (isExist) {
      LoginDispatch();
     
      localStorage.setItem("user",client.email);
      Navigate('/home');
      
    }
  }
  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5 text-center ">
          <h2 style={{ color: "green" }}>Login Here</h2>
          <div className="col-md-6 bg-info pt-5">
            <form>
              <div class="form-outline mb-4">
                <input type="email" id="form2Example1" class="form-control" onChange={(e) => setUser({ email: e.target.value })} />
                <label class="form-label" for="form2Example1">
                  Email address
                </label>
              </div>

              <div class="form-outline mb-4">
                <input
                  type="password"
                  id="form2Example2"
                  class="form-control"
                  onChange={(e) => setUser({ ...client, password: e.target.value })}
                />
                <label class="form-label" for="form2Example2">
                  Password
                </label>
              </div>

              <div class="row mb-4">
                <div class="col d-flex justify-content-center">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="form2Example31"
                      checked
                    />
                    <label class="form-check-label" for="form2Example31">
                      {" "}
                      Remember me{" "}
                    </label>
                  </div>
                </div>

                <div class="col">
                  <a href="#!">Forgot password?</a>
                </div>
              </div>

              <button type="button" class="btn btn-primary btn-block mb-4" onClick={() => LoginHandler()} >
                Sign in
              </button>

              <div class="text-center">
                <p>
                  Not a member?  <Link to='/Registration1'>Register</Link>
                </p>
                <p>or sign up with:</p>
                <Link to='/admin'>Go to Admin</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
