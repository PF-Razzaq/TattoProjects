import React, { useState } from "react";
import HeaderTop from "../TopHeader/HeaderTop";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./UpgradePlan.css";
import UpgradeForm from "../UpgradeForm/UpgradeForm";

const UpgradePlan = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <div>
        <HeaderTop />
      </div>
      <div>
        <div
          className="mx-auto mt-5"
          style={{ width: "90%", height: "200px", background: "#1b3b35" }}
        ></div>
      </div>
      <div
        className="d-flex justify-content-between mx-auto"
        style={{ width: "85%", marginTop: "-10rem" }}
      >
        <div>
          <div className="border bg-light p-3 plan-block">
            <div className="d-flex flex-column fw-bold align-items-center mt-4">
              <button
                type="submit"
                className="btn mt-2"
                style={{
                  background: "#1b3b36",
                  color: "white",
                  padding: "10px 50px",
                }}
              >
                Premium Plan 1500/-
              </button>
            </div>
            <div className="d-flex flex-column align-items-center mt-4">
              <ul>
                <li>Lorem ipsum dolor sit amet, consectetur</li>
                <li>Lorem ipsum dolor sit amet, consectetur</li>
                <li>Lorem ipsum dolor sit amet, consectetur</li>
                <li>Lorem ipsum dolor sit amet, consectetur</li>
                <li>Lorem ipsum dolor sit amet, consectetur</li>
                <li>Lorem ipsum dolor sit amet, consectetur</li>
              </ul>
            </div>
            <div className="d-flex flex-column fw-bold align-items-center mt-4">
              <div
                className="mt-2 d-flex align-items-center justify-content-between mx-auto"
                style={{
                  padding: "0px 18px",
                  background: "#1b3b36",
                  color: "white",
                }}
              >
                <div>Select Date</div>
                <div className="accordion-content">
                  <div className="date-picker">
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column fw-bold align-items-center mt-4">
              <div
                className="mt-2 d-flex align-items-center justify-content-between mx-auto"
                style={{
                  padding: "0px 25px",
                  background: "#1b3b36",
                  color: "white",
                }}
              >
                <div>End Date</div>
                <div className="accordion-content">
                  <div className="date-picker">
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column fw-bold align-items-center mt-4">
              <button className="upgrade-button mt-3">UPGRADE PLANS</button>
            </div>
          </div>
        </div>
        <div>
          <UpgradeForm />
        </div>
      </div>
    </>
  );
};

export default UpgradePlan;
