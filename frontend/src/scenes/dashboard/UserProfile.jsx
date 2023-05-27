import React from "react";
import { Grid } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import WorkIcon from "@mui/icons-material/Work";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import userImage from "../../assets/user.jpg";
import Button from '@mui/material/Button';
import "./UserProfile.css";
import { useNavigate } from "react-router-dom";


function UserProfile() {
 
  const navigate = useNavigate();

  const handleProfile = () => {
    navigate("/udash");
  }


  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box className="box">
          <h2 className="header">User Profile</h2>
          <Box className="left">
            <Box>
              <img className="photo" src={userImage}></img>
            </Box>
            <span className="name">{localStorage.getItem("currentname")}</span>
          </Box>
          <Box className="right">
            <ui className="flex flex-col gap-3">
              <li className="l">
                <EmailOutlinedIcon /> Email :{" "}
                <span className="light">
                 {localStorage.getItem("currentmail")} 
                </span>
              </li>
              <li className="l">
                <PhoneIcon/> Contact No :{" "}
                <span className="light">
                 {localStorage.getItem("currentphone")} 
                </span>
              </li>
              <li className="l">
                <PlaceIcon /> Location :{" "}
                <span className="light">
                  {localStorage.getItem("currentaddress")}
                </span>
              </li>
            </ui>
            <Button className="button" variant="outlined" color="success" onClick={handleProfile}>Back to Dashboard</Button>
          </Box>
        </Box>
      </Container>
    </React.Fragment>

    // <Grid item >
    //     <h2 className='header'>User Profile</h2>
    //       <Grid item xs={10}>
    //         <div className="photo">
    //           <p className="pn">Mr.{localStorage.getItem("currentname")}</p>

    //         </div>
    //         <div className="picon">
    //           <div title={localStorage.getItem("currentphone")}>
    //           <PhoneIcon  />
    //           </div>

    //           <EditOutlinedIcon/>

    //           <div title={localStorage.getItem("currentmail")}>
    //           <EmailOutlinedIcon />
    //           </div>
    //         </div>

    //         <div className="flex flex-col profiledata">
    //           <ui className="flex flex-col gap-3 ">
    //             <li className="l"><WorkIcon/>      Work : <span className="light">All type of {localStorage.getItem("currentprof")} work</span></li>
    //             <li className="l"><PlaceIcon/>   Location : <span className="light">{localStorage.getItem("currentaddress")}</span></li>
    //             <li className="l"><AccessTimeFilledIcon/>  Working hour : <span className="light">12pm - 9pm</span></li>
    //           </ui>
    //         </div>
    //       </Grid>

    //   </Grid>
  );
}

export default UserProfile;
