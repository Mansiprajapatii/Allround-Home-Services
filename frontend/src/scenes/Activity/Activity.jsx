import React from "react";
import { Grid } from "@mui/material";
import "./Acitivity.css";
import ElecSvg from ".././../assets/Electrician-pana (2).svg";
import WorkIcon from "@mui/icons-material/Work";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from "@mui/icons-material/Phone";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Status from "./StatusTable/Status";
import empPhoto from '../../assets/user.jpg';
import Allemp from '../../assets/allwork.svg';

const Activity = (props) => {
  
  return (
    <div className="main-act">
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <div className="detail">
            <div className="info">
              <p>Hello {localStorage.getItem("currentname")}</p>
              <p className="info-details">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                earum eveniet ab fugiat cupiditate? Iure a ducimus optio quam
                omnis.
              </p>
            </div>
            <div>
              <img className="ele-svg" src={Allemp} alt="React Logo" />
            </div>
          </div>
        </Grid>

        <Grid item xs={8}>
          <div >
            <Status/>
          </div>
        </Grid>

        <Grid item xs={4}>
          <div className="profile">
            <Grid item xs={10}>
              <div className="ph">
                <img className="em" src={empPhoto}></img>
                <p className="pn">{localStorage.getItem("currentname")}</p>
                <p className="pp">{localStorage.getItem("currentprof")}</p>
              </div>
              <div className="picon">
                <div title={localStorage.getItem("currentphone")}>
                <PhoneIcon  />
                </div>
               
                <EditOutlinedIcon/>
             
                <div title={localStorage.getItem("currentmail")}>
                <EmailOutlinedIcon />
                </div>
              </div>

              <div className="flex flex-col profiledata">
                <ui className="flex flex-col gap-3 ">
                  <li className="l"><WorkIcon/>      Work : <span className="light">All type of {localStorage.getItem("currentprof")} work</span></li>
                  <li className="l"><PlaceIcon/>   Location : <span className="light">{localStorage.getItem("currentaddress")}</span></li>
                  <li className="l"><AccessTimeFilledIcon/>  Working hour : <span className="light">12pm - 9pm</span></li>
                </ui>
              </div>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Activity;
