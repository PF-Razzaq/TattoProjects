import React from "react";
import Logo from "../../assets/images/logo.png";
import BuyPlan from "../BuyPlan/BuyPlan";

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
        <div className="border-circle">
          <img
            className="bg-secondary"
            src=""
            alt="Profile"
            style={{ width: "20px", height: "20px" }}
          />
        </div>
      </div>
      <BuyPlan />
    </>
  );
};

export default Header;
