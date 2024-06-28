import React from "react";

const BuyModel = () => {
  return (
    <>
      <div className="border bg-light p-3 mt-5">
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
            Basic Plan
          </button>
        </div>
        <div className="d-flex flex-column fw-bold align-items-center mt-4">
          1500/-
        </div>
        <div className="d-flex flex-column align-items-center mt-4">
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur </li>
            <li>Lorem ipsum dolor sit amet, consectetur </li>
            <li>Lorem ipsum dolor sit amet, consectetur </li>
            <li>Lorem ipsum dolor sit amet, consectetur </li>
            <li>Lorem ipsum dolor sit amet, consectetur </li>
            <li>Lorem ipsum dolor sit amet, consectetur </li>
          </ul>
        </div>
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
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
};

export default BuyModel;
