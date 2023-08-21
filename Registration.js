import React from "react";
import Navbar from "./Navbar";
import { Routes, Route,BrowserRouter as Router } from "react-router-dom";
import {NavLink} from "react-router-dom";
const Home = () => {
  return (
    <>
     <Navbar/>
      <section className="Jk-section">
        <h1>jepdj Lorem ipsum dolor sit amet
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quaerat quis illo eius laborum molestiae sint adipisci mollitia aspernatur nulla voluptates asperiores excepturi, numquam alias repellendus perferendis ullam voluptatum hic. .</p>
      </section>
    </>
  );
};

const About = () => {
  return (
    <>
      <Navbar />
      <section className="Jk-section">
        <p>Welcome to </p>
        <h1>LSD</h1>
      </section>
    </>
  );
};

const Service = () => {
  return (
    <>
      <Navbar />
      <section className="Jk-section">
        <p>Welcome to </p>
        <h1>Baleshwar</h1>
      </section>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="Jk-section">
        <p>Welcome to </p>
        <h1>JK's world</h1>
      </section>
    </>
  );
};

const App = () => {
  return (
    <>
    
    <Router>
    <div className='menu-link'>
            <ul>
                <li><NavLink to="/Home">Home</NavLink></li>
                <li><NavLink to="/About ">About</NavLink></li>
                <li><NavLink to="/Service">Service</NavLink></li>
                <li><NavLink to="/Contact">Contact</NavLink></li>
            </ul>

        </div>
    
    <Routes>
      <Route exact path="/" element={<Home/>}></Route>
    <Route exact path="/Home" element={<Home/>}>
        
      </Route>

      <Route path="/About" element={<About/>}>
       
      </Route>

      <Route path="/Service" element={<Service/>}>
        
      </Route>

      <Route path="/Contact" element={<Contact/>}>
       
      </Route>
    </Routes>
                

    </Router>
    </>
  );
};

export default App;
