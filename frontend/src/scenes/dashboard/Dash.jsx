import React from "react";
import Topbar from "../global/Topbar";
import Activity from "../Activity/Activity";
import { useEffect,useState } from "react";
import "./Dash.css";

const Dashboard = () => {
  
  return (
    <div>
      <Topbar user='emp'/>
      <div className="main-content">
        <Activity />
        
      </div>
    </div>
  );
};

export default Dashboard;
