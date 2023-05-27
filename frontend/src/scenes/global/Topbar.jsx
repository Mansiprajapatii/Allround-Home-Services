import React from "react";
import "./Topbar.css";
import logo from "../../assets/Logo2.svg";
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import ProfileDrop from "../dashboard/profileDrop";
import ProfileDropEmp from "../dashboard/profileDropEmp";
import { useState } from "react";


const Topbar = (props) => {

  const [open,setOpen] = useState(false);


  return (
    <div className="topbar">
        <div className="logo">
          <img className="logo-img" src={logo} width="315px" />
        </div>
        <div className="user-icon">
        <Avatar onClick={ ()=> setOpen(!open)} sx={{ bgcolor: deepOrange[500] }} >N</Avatar>
       {open&&props.user === "emp"&&<ProfileDropEmp/>}
       {open&&props.user === "user"&&<ProfileDrop/>}
       
      </div>
      
    </div>
  );
};

export default Topbar;
