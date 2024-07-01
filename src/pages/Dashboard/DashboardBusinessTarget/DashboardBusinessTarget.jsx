import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DashboardBusinessTarget.css";
import { CiSearch } from "react-icons/ci";
import { SearchOutlined } from "@ant-design/icons";

function DashboardBusinessTarget() {
  return (
    <div className="container my-component">
      <div className="box shadow-sm bg-white p-4 mb-3 rounded">
        <div className="content px-3">
          <div className="header d-flex justify-content-between align-items-center">
            <h3 className="title mb-0">Business Target</h3>
            <input
              style={{
                width: "50%",
                margin: "2%",
                borderRadius: "0px",
                color: "black",
              }}
              size="medium"
              placeholder="Location"
              prefix={<SearchOutlined />}
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/521f4c80c2347c94ef6827743d7fc4dc4b7b5b2bc4ea64c9eef8c9f9e7edbec9?apiKey=15012db4207446929dd42c5e3e02ffb2&"
              className="action-icon"
              alt="action-icon"
            />
          </div>
          <div className="targets d-flex justify-content-between ms-5 mt-4">
            <div>Target 1</div>
            <div>Target 2</div>
            <div>Target 3</div>
            <div>% input</div>
            <div>Amount</div>
            <div>Bonus</div>
          </div>
        </div>

        {["Business 1", "Business 2", "Business 3"].map((business, index) => (
          <div
            key={index}
            className="business-row d-flex justify-content-between align-items-center mt-4"
          >
            <div className="business-name">{business}</div>
            <div className="business-info d-flex flex-column">
              <div className="progress-bar bg-secondary d-flex">
                <div
                  className="progress-segment bg-primary"
                  style={{ width: "50%" }}
                />
                <div
                  className="progress-segment bg-warning"
                  style={{ width: "30%" }}
                />
                <div
                  className="progress-segment bg-danger"
                  style={{ width: "20%" }}
                />
              </div>
              <div className="description mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </div>
            </div>
            <div>5%</div>
            <div>10000</div>
            <div>2x</div>
          </div>
        ))}
      </div>
      <div className="d-flex notification-box shadow-sm bg-white p-3 rounded">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d61d1cf8d22e40b98b5577b04adde7f00665932d835431dfa84e8801b94674b2?apiKey=15012db4207446929dd42c5e3e02ffb2&"
          className="notification-icon"
          alt="notification-icon"
        />
        <div className="notification-text ml-3">
          New Requests: Lorem Ipsum has requested to accept expense of 1000 /-
        </div>
      </div>
    </div>
  );
}

export default DashboardBusinessTarget;
