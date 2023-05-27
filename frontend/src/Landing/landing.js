import "./landing.css";
import DrawerAppBar from "./AppBar";
import MultiActionAreaCard from "./Cards";
import FolderList from "./footer";
import electrician2 from "../assets/Electrician2.svg";
import malechef from "../assets/Male chef cooking in kitchen.svg";
import painter from "../assets/painter.jpg";
import plumber from "../assets/plumber.png";
import homerepair from "../assets/Home Repairing.svg";
import homesec from "../assets/home security.svg";
import SignUp from "./form";
import image from "../assets/Cleaning .svg";
import worker from "../assets/worker.svg";
import Contact from "../assets/Contact.svg";
import Button from "@mui/material/Button";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function AppLanding() {
  const navigate = useNavigate();

  const handleUSignup = () => {
    navigate("/usignup");
  }

  const handleESignup = () => {
    navigate("/esignup");
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="landing">
      {" "}
      <div classname="appbar">
        <DrawerAppBar />
      </div>
      <div className="uppercomp">
        <div className="written">
          <h1 className="display-2">
            Book Services <br />
            At affordable price.
          </h1>
          <p className="main-para">
            Here you can book any kind of services by just one click
            <br />
            According to your needs, time, date.
          </p>
          <div className="mainbutton">
            <Button className="mainbutton" variant="contained" disableElevation onClick={handleUSignup}>
              Register
            </Button>
          </div>
        </div>

        <img className="headimg1" src={image} alt="React Logo" />
      </div>
      <div className="uppercomp">
        <img className="headimg2" src={worker} alt="React Logo" />
        <div className="written">
          <h1 className="display-2">
            Join Our Team and <br />
            Empower Our Services
          </h1>
          <p className="main-para">
            Exciting Opportunities Await: Get Paid Well for Instant Work on Our
            Service-Oriented Website!
          </p>
          <div className="mainbutton">
            <Button className="mainbutton" variant="contained" onClick={handleESignup}>
              Register
            </Button>
          </div>
        </div>
      </div>
      <h1 className="service">Our Services</h1>
      <div className="cards">
        <MultiActionAreaCard
          title={"Electricians"}
          image={electrician2}
          className="citems"
        />
        <MultiActionAreaCard
          title={"Home Repairing"}
          image={homerepair}
          className="citems"
        />
        <MultiActionAreaCard
          title={"Chefs"}
          image={malechef}
          className="citems"
        />
      </div>
      <div className="cards">
        <MultiActionAreaCard
          title={"Plumbers"}
          image={plumber}
          className="citems"
        />
        <MultiActionAreaCard
          title={"Painters"}
          image={painter}
          className="citems"
        />
        <MultiActionAreaCard
          title={"Home Security"}
          image={homesec}
          className="citems"
        />
      </div>
      <div className="wholeform">
        <div className="contact-display-2">
          <h1 className="contact-head">Contact Us</h1>
          <p className="contact-para">
            So here you can Contact us and tell us if you need Any help
          </p>
        </div>
        <div className="form">
          <img className="contactus" src={Contact} alt="React Logo" />
          <SignUp />
        </div>

        <div className="footer">
          <FolderList />
        </div>
      </div>
    </div>
  );
}

export default AppLanding;
