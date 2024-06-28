import React from "react";
import BuyModel from "./BuyModel";

const BuyPlan = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div
          className="mx-auto mt-5"
          style={{ width: "90%", height: "200px", background: "#1b3b35" }}
        ></div>
        <div
          className="d-flex justify-content-between"
          style={{ width: "80%", position: "absolute", marginTop: "17rem" }}
        >
          <div>
            <BuyModel />
          </div>
          <div>
            <BuyModel />
          </div>
          <div>
            <BuyModel />
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyPlan;
