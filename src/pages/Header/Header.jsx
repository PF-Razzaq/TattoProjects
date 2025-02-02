import React from "react";
import Logo from "../../assets/images/logo.png";
import BuyPlan from "../BuyPlan/BuyPlan";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div
        className="d-flex justify-content-between mt-2 align-items-center mx-auto"
        style={{ width: "90%" }}
      >
        <div>
          <img src={Logo} alt="Logo" style={{ width: "200px" }} />
        </div>
        <div>
          <p>Enroll below subscription and get approved by super admin</p>
        </div>
        <div className="profile mt-1"></div>
      </div>
      <BuyPlan />
    </>
  );
};

export default Header;
