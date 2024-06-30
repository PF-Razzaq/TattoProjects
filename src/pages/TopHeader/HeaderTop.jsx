import React from "react";
import Logo from "../../assets/images/logo.png";
import "./Header.css";

const HeaderTop = () => {
  return (
    <>
      <div
        className="d-flex justify-content-between mt-2 align-items-center mx-auto"
        style={{ width: "90%" }}
      >
        <div>
          <img src={Logo} alt="Logo" style={{ width: "200px" }} />
        </div>
        <div className="profile mt-1"></div>
      </div>
    </>
  );
};

export default HeaderTop;
