import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AccesContext } from "../Context/UseContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function Register() {
  const Navigate = useNavigate();
  const [user, setUser] = useState({});
  const { AddUser } = AccesContext();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  // const onSubmit = (data) => console.log(data);
  const onSubmit = (e) => {
   
    
    AddUser(e);
    Navigate("/Login");
  };

  const rgs = () => {
    console.log(user);
    AddUser(user);
    Navigate("/Login");
  };

  return (
    <>
      <section class="vh-100 bg-info">
        <div class="mask d-flex align-items-center h-100 gradient-custom-3">
          <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                <div class="card" style={{ borderRadius: "15px" }}>
                  <div class="card-body p-5">
                    <h2 class="text-uppercase text-center mb-5">
                      Create an account
                    </h2>

                    <form onSubmit={handleSubmit(onSubmit)} method="post">
                      <div class="form-outline mb-4">
                        <label class="form-label" for="form3Example1cg">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="form3Example1cg"
                          class="form-control form-control-lg"
                          onChange={(e) =>
                            setUser({ name: e.target.value, ...user })
                          }
                          {...register("name", { required: true,type:"String" })}
                        />

                        <error>
                          {errors.name?.type === "required" &&
                            "Name is required"}
                        </error>
                      </div>

                      <div class="form-outline mb-4">
                        <label class="form-label" for="form3Example3cg">
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="form3Example3cg"
                          class="form-control form-control-lg"
                          onChange={(e) =>
                            setUser({ ...user, email: e.target.value })
                          }
                          {...register("email", {
                            required: true,
                            pattern:
                              /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                          })}
                        />

                        <error>
                          {errors.email?.type === "required" &&
                            "Email is required"}
                          {errors.email?.type === "pattern" &&
                            "Entered email is in wrong format"}
                        </error>
                      </div>

                      <div class="form-outline mb-4">
                        <label class="form-label" for="form3Example4cg">
                          Password
                        </label>
                        <input
                          type="password"
                          id="form3Example4cg"
                          class="form-control form-control-lg"
                          onChange={(e) =>
                            setUser({ ...user, password: e.target.value })
                          }
                          {...register("password", {
                            required: true,
                            minLength: 5,
                            maxLength: 20,
                          })}
                        />

                        <error>
                          {errors.password?.type === "minLength" &&
                            "Entered password is less than 5 characters"}
                          {errors.password?.type === "maxLength" &&
                            "Entered password is more than 20 characters"}
                        </error>
                      </div>

                      <div class="form-outline mb-4">
                        <label class="form-label" for="form3Example4cdg">
                          Repeat your password
                        </label>
                        <input
                          type="password"
                          id="form3Example4cdg"
                          class="form-control form-control-lg"
                        />
                      </div>

                      <div class="form-check d-flex justify-content-center mb-5">
                        <input
                          class="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3cg"
                        />
                        <label class="form-check-label" for="form2Example3g">
                          I agree all statements in{" "}
                          <a href="#!" class="text-body">
                            <u>Terms of service</u>
                          </a>
                        </label>
                      </div>

                      <div class="d-flex justify-content-center">
                        <input type="submit" />
                        {/* <button type="button"
                                                    class="btn btn-success btn-block btn-lg gradient-custom-4 text-body" onClick={rgs}>Register</button> */}
                      </div>

                      <p class="text-center text-muted mt-5 mb-0">
                        Have already an account? <Link to="/login">Login</Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
