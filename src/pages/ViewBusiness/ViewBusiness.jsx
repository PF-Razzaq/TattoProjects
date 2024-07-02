import React from "react";
import "./ViewBusiness.css";
import HeaderTop from "../TopHeader/HeaderTop";
import Sidebar from "../Sidebar/Sidebar";
import ViewHairSalon from "./ViewHairSalon";

const ViewBusiness = () => {
  return (
    <>
      <div>
        <div>
          <HeaderTop />
        </div>
        <div className="d-flex">
          <div>
            <Sidebar />
          </div>
          <div>
            <ViewHairSalon />
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewBusiness;
