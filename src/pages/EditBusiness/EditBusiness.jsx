import React from "react";
import HeaderTop from "../TopHeader/HeaderTop";
import Sidebar from "../Sidebar/Sidebar";
import { FaArrowLeft } from "react-icons/fa";
import "./EditBusiness.css";
import { PiUpload } from "react-icons/pi";

const EditBusiness = () => {
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
          <div className="mt-5 ms-5">
            <div>
              <span>
                <FaArrowLeft />
              </span>
              <span className="ms-3 fs-5">Edit Business Details</span>
            </div>
            <div>
              <div>
                <div className="file-upload-wrapper">
                  <input type="file" id="fileUpload" className="file-upload" />
                  <label
                    htmlFor="fileUpload"
                    className="file-upload-label mt-3"
                  >
                    <span className="" style={{ fontSize: "30px " }}>
                      <PiUpload />
                    </span>
                  </label>
                </div>{" "}
                <div style={{ fontSize: "13px", marginTop: "-5px" }}>
                  Upload Icon
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditBusiness;
