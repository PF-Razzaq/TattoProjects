import React from "react";
import "./AddBusiness.css";
import HeaderTop from "../TopHeader/HeaderTop";
import Sidebar from "../Sidebar/Sidebar";
import AddBusinessForm from "./AddBusinessForm";

const AddBusiness = () => {
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
            <div className="addBusinessContainer">
              <AddBusinessForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBusiness;
