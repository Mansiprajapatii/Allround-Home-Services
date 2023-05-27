import React, { useState } from "react";
import './UserDash.css';
import Topbar from "../global/Topbar";
import EmpCard from "../Activity/EmpCard/EmpCard";
import Plumber from '../../assets/Plumber.svg'
import Appliances from '../../assets/Air conditioner repair.svg';
import Electrician from '../../assets/Electrician2.svg'
import Painter from '../../assets/Home Repairing.svg'
import "./Dash.css";
const UserDash = () => {


  return (
    <div>
      <Topbar user='user'/>
      
      <div className="main-content1">

        <EmpCard title={'Plumber'}     image={Plumber} user = {'plm'}/>
        <EmpCard title={'Electrician'}  image={Electrician}  user = {'ele'}/>
        <EmpCard title={'Painter'}   image={Painter }  user = {'paint'}/>

        </div>

         
      {/* <div className="main-content1">
    
      <EmpCard title={'Applainces helper'}     image={Appliances}/>
      <EmpCard title={'Carpenter'}  image={Electrician}/>
      <EmpCard title={'Home Cleaner'}   image={Painter }/>
      </div> */}


    
    </div>
  );
};

export default UserDash;
