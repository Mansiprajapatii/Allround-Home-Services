import React, {useState} from "react";
import "./Auth.css";
import { Link,useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [rep,setrep] = useState({})
  const [user,setUser] = useState({
    email: "",
    password: "",
  })

  function submit(e) {
    e.preventDefault(); 
    console.log(user);
    fetch("https://ahs.up.railway.app/api/login", {
      method: "POST",
      body: JSON.stringify(user),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setrep(data));
   console.log(rep);
   
   localStorage.setItem("currentmail",rep.mail);
   localStorage.setItem("currentname",rep.name);
   localStorage.setItem("currentphone",rep.phone);
   localStorage.setItem("currentaddress",rep.address);
   localStorage.setItem("currentuid",rep.id);
   
   
    if (rep.success === true) {
      navigate("/udash");
    }
  };
  


  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <div className="Login-card">
          <form>
            <h3>User Sign In</h3>

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
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary" onClick={submit}>
                Submit
              </button>
            </div>
            <p className="forgot-password text-right">
              <Link to={"/usignup"}>Not Registered?</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
