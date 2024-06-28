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

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/header" element={<Header />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
