import React from "react";
import "./AddBusinessForm.css";
import { FaArrowLeft } from "react-icons/fa";

const AddBusinessForm = () => {
  return (
    <>
      <div>
        <div className="d-flex mt-5" style={{ marginLeft: "5rem" }}>
          <span className="me-3">
            <FaArrowLeft />
          </span>
          <div className="fw-bold">Add Business Detail</div>
        </div>
        <div className="mt-5" style={{ marginLeft: "5rem" }}>
          <form action="">
            <div>
              <input
                type="text"
                className="addBusinessForm"
                placeholder="Business Name"
                style={{ width: "700px" }}
              />
            </div>
            <div className="d-flex justify-content-between mt-3">
              <input
                type="text"
                className="addBusinessForm"
                placeholder="Business Type"
                style={{ width: "400px" }}
              />
              <input
                type="text"
                className="addBusinessForm"
                placeholder="Date of Opening"
                style={{ width: "250px" }}
              />
            </div>
            <div className="mt-3">
              <input
                type="text"
                className="addBusinessForm"
                placeholder="ABOUT Business"
                style={{ width: "1000px" }}
              />
            </div>
            <div className="mt-3">
              <input
                type="text"
                className="addBusinessForm"
                placeholder="STUDIO Business"
                style={{ width: "1000px" }}
              />
            </div>
            <div className="mt-3">
              <input
                type="text"
                className="addBusinessForm"
                placeholder="STUDIO CONTENT DETAIL"
                style={{ width: "1000px" }}
              />
            </div>
            <div className="d-flex justify-content-between">
              <div className="mt-3">
                <input
                  type="text"
                  className="addBusinessForm"
                  placeholder="EMAIL"
                  style={{ width: "490px" }}
                />
              </div>
              <div className="mt-3">
                <input
                  type="text"
                  className="addBusinessForm"
                  placeholder="WEBSITE"
                  style={{ width: "490px" }}
                />
              </div>
            </div>
            <div className="mt-3">
              <input
                type="text"
                className="addBusinessForm"
                placeholder="SOCIAL MEIDA LINK"
                style={{ width: "1000px" }}
              />
            </div>
            <div className="mt-5">SERVICES</div>
            <form action="">
              <div>
                <div className="">
                  <div className="d-flex justify-content-between">
                    <div className="mt-3">
                      <input
                        type="text"
                        className="addBusinessForm"
                        placeholder="SERVICE NAME"
                        style={{ width: "490px" }}
                      />
                    </div>
                    <div className="mt-3">
                      <input
                        type="text"
                        className="addBusinessForm"
                        placeholder="SERVICE TYPE"
                        style={{ width: "490px" }}
                      />
                    </div>
                  </div>
                  <div className="mt-3">
                    <input
                      type="text"
                      className="addBusinessForm"
                      placeholder="SERVICE DESCRIPTION "
                      style={{ width: "1000px" }}
                    />
                  </div>
                  <div className="d-flex">
                    <div className="mt-3">
                      <input
                        type="text"
                        className="addBusinessForm"
                        placeholder="PRICE/UNIT "
                        style={{ width: "300px" }}
                      />
                    </div>{" "}
                    <div className="mt-3">
                      <input
                        type="text"
                        className="addBusinessForm"
                        placeholder="TIME REQUIRED"
                        style={{ width: "300px" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-end">
                  <button className="btn btn-primary mt-5" type="submit">
                    ADD SERVICE
                  </button>
                </div>
              </div>
            </form>
            <button className="btn btn-primary mt-5 mb-5" type="submit">
              SAVE
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddBusinessForm;
