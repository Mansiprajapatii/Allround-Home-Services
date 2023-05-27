import React from "react";
import "./Sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import EditIcon from "@mui/icons-material/Edit";
import SettingsIcon from "@mui/icons-material/Settings";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="side-opt">
        <li>
          <HomeIcon className="icon hm" />
          DashBoard
        </li>
        <li>
          {" "}
          <WorkIcon className="icon wk" />
          Work
        </li>
        <li>
          <EditIcon className="icon pf" />
          Edit Profile
        </li>
        <li>
          <SettingsIcon className="icon st" />
          Settings
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
