import React from "react";
import Dashboard from "./scenes/dashboard/Dash";
import UserDash from "./scenes/dashboard/UserDash";
// import MainLanding from "./Landing/MainLanding";
import MainLanding from "./Landing/landing"
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import EmpSignUp from "./Auth/EmpSignUp";
import EmpLogin from "./Auth/EmpLogin";
import { Routes, Route } from "react-router-dom";
import UserProfile from "./scenes/dashboard/UserProfile";
import UserBookings from "./scenes/dashboard/UserBookings";

const App = () => {
  return (
    <div className="app">
      {/* <Dashboard /> */}
      {/* <UserDash/> */}
      <Routes>
        <Route path="/" element={<MainLanding />} />
        <Route path="/ulogin" element={<Login />} />
        <Route path="/usignup" element={<SignUp />} />
        <Route path="/esignup" element={<EmpSignUp />} />
        <Route path="/elogin" element={<EmpLogin />} />
        <Route path="/udash" element={<UserDash />} />
        <Route path="/edash" element={<Dashboard />} />
        <Route path="/uprofile" element={<UserProfile />} />
        <Route path="/ubooks" element={<UserBookings />} />
      </Routes>
    </div>
  );
};

export default App;
