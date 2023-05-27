import React from "react";
import Booked from "../../assets/booked.svg";
import "./Bookpopup.css";
function Bookpopup({ open, onClose }) {
  if (!open) return null;

  return (
    <div onClick={onClose} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <img src={Booked} alt="logo" />
        <div className="modalRight">
          <p onClick={onClose} className="closeBtn">
            X
          </p>
          <div className="content">
            <p>Do you Want to Book Service?</p>
            <p>Amount Charged: $100</p>
          </div>
          <div className="btnContainer">
            <button className="btnPrimary">
              <span className="bold">YES</span>, I Love your service
            </button>
            <button className="btnOutline">
              <span className="bold">NO</span>, just exploring
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bookpopup;
