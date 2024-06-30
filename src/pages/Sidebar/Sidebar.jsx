import React, { useState } from "react";
import lines from "../../assets/images/lines.png";
import "./Sidebar.css";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(null);

  const toggleItem = (item) => {
    setActiveItem(activeItem === item ? null : item);
  };

  return (
    <div className="sidebar">
      <div
        className={`sidebar-item ${
          activeItem === "Dashboard" ? "sidebar-item-active" : ""
        }`}
        onClick={() => toggleItem("Dashboard")}
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc2a835e120e2b5beb1605424f7992b7cc2c4c300fb7e9649f63682d53f2b38d?"
          alt="Dashboard"
        />
        <div className="sidebar-item-text">Dashboard</div>
      </div>
      <div
        className={`sidebar-item ${
          activeItem === "Business" ? "sidebar-item-active" : ""
        }`}
        onClick={() => toggleItem("Business")}
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f02cc95f6cd9e265776625fd95228cdfd4b5053832b153386fc960a85322731f?"
          alt="Business"
        />
        <div className="sidebar-item-text">Business</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f460e59853eaed688069f490439e5e5eee2db641ff6fabe5922c44a09f90cc5?"
          alt="Arrow"
        />
      </div>
      <div
        className={`collapse sidebar-item ${
          activeItem === "Business" ? "show" : ""
        }`}
      >
        <img
          loading="lazy"
          src={lines}
          alt="Add Business"
          className="sidebar-img-sm"
        />
        <div className="sidebar-submenu">
          <div className="submenu-item mb-3 fw-bold">Add Business</div>
          <div className="submenu-item">View Business</div>
        </div>
      </div>
      <div
        className={`sidebar-item ${
          activeItem === "Configuration" ? "sidebar-item-active" : ""
        }`}
        onClick={() => toggleItem("Configuration")}
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3cc9091fb8900b10bfa987642d5897caee31d8eec3ba34016209f561a6acf33?"
          alt="Configuration"
        />
        <div className="sidebar-item-text">Configuration</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f460e59853eaed688069f490439e5e5eee2db641ff6fabe5922c44a09f90cc5?"
          alt="Arrow"
        />
      </div>
      <div
        className={`sidebar-item ${
          activeItem === "Expenses" ? "sidebar-item-active" : ""
        }`}
        onClick={() => toggleItem("Expenses")}
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/08c7aeda3ec8b84e760f003935dcd9e7c4632ae8cf404f2f38867a82ed9ddbe2?"
          alt="Expenses"
        />
        <div className="sidebar-item-text">Expenses</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f460e59853eaed688069f490439e5e5eee2db641ff6fabe5922c44a09f90cc5?"
          alt="Arrow"
        />
      </div>
      <div
        className={`sidebar-item ${
          activeItem === "Team Performance" ? "sidebar-item-active" : ""
        }`}
        onClick={() => toggleItem("Team Performance")}
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec0ec601b30ed235921eecc310bd943e043eb7c7500d98487c0f2317b4df2418?"
          alt="Team Performance"
        />
        <div className="sidebar-item-text">Team Performance</div>
      </div>
      <div
        className={`sidebar-item ${
          activeItem === "My Subscriptions" ? "sidebar-item-active" : ""
        }`}
        onClick={() => toggleItem("My Subscriptions")}
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9058f33eb62fe439fd56627976bb4b618eaea18b92980bd32738e76f8ba5a15b?"
          alt="My Subscriptions"
        />
        <div className="sidebar-item-text">My Subscriptions</div>
      </div>
      <div
        className={`sidebar-item ${
          activeItem === "Reports" ? "sidebar-item-active" : ""
        }`}
        onClick={() => toggleItem("Reports")}
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a78ffc6238ad870e843dc551745a40c88fefe2d2c6ac834f5ea61fbaea2987a?"
          alt="Reports"
        />
        <div className="sidebar-item-text">Reports</div>
      </div>
      <div
        className={`sidebar-item ${
          activeItem === "Logout" ? "sidebar-item-active" : ""
        }`}
        onClick={() => toggleItem("Logout")}
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3cf9defc0621fa387705767e84866a8aae1f014eb9cbce6fa09e6994f0956bbd?"
          alt="Logout"
        />
        <div className="sidebar-item-text">Logout</div>
      </div>
    </div>
  );
};

export default Sidebar;
