import React, {useState} from "react";
import "./Auth.css";
import { Link,useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate();
  const [rep,setrep] = useState({})
  const [user,setUser] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    phone:""
  })

  function submit(e) {
    e.preventDefault(); 
    console.log(user);
    fetch("https://ahs.up.railway.app/api/signin", {
      method: "POST",
      body: JSON.stringify(user),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setrep(data));
    // localStorage.setItem("currentuser", rep.userid);
    // console.log(localStorage.getItem("currentuser"));
    console.log(rep);
    if (rep.success === true) {
      navigate("/ulogin");
    }
  };

  
  

  return (

    <div className="auth-wrapper">
      <div className="auth-inner">
        <form >
          <h3>User Sign Up</h3>

          <div className="mb-3">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              onChange={(e)=>{setUser({...user,name:e.target.value})}}
            />
          </div>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e)=>{setUser({...user,email:e.target.value})}}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e)=>{setUser({...user,password:e.target.value})}}
            />
          </div>

          <div className="mb-3">
            <label>Phone number</label>
            <input
              type=" number"
              className="form-control"
              placeholder="Enter Number"
              onChange={(e)=>{setUser({...user,phone:e.target.value})}}
            />
          </div>

          {/* <div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="Country" aria-label="Username"/>
  <span className="input-group-text"></span>
  <input type="text" className="form-control" placeholder="City" aria-label="Server"/>
           </div>
      */}

          <div className="mb-3">
            <label>Address</label>
            <input
             type="text"
             className="form-control" 
             placeholder="Address"
             onChange={(e)=>{setUser({...user,address:e.target.value})}}
           />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary"  onClick={submit}>
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            <Link to={"/ulogin"}>Already registered? Click Here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
