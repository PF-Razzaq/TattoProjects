import "./App.css";
import React from "react";

import "./App.css"; // Import custom styles
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  BrowserRouter,
} from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import Header from "./pages/Header/Header";
import UpgradePlan from "./pages/UpgradePlan/UpgradePlan";
import UpgradeForm from "./pages/UpgradeForm/UpgradeForm";
import Sidebar from "./pages/Sidebar/Sidebar";
import Profile from "./pages/Profile/Profile";
import BusinessDetail from "./pages/BusinessDetail/BusinessDetail";
import AddBusiness from "./pages/AddBusiness/AddBusiness";
import AddBusinessForm from "./pages/AddBusiness/AddBusinessForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/header" element={<Header />} />
          <Route path="/" element={<UpgradePlan />} />
          <Route path="/form" element={<UpgradeForm />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/BusinessDetail" element={<BusinessDetail />} />
          <Route path="/addbusiness" element={<AddBusiness />} />
          <Route path="/addBusinessForm" element={<AddBusinessForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
