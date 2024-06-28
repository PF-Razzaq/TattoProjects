import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleGenerateOtp = () => {
    // Implement OTP generation logic here
    console.log("Generating OTP...");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-6 col-lg-4">
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="text-center mb-4">
            <h2 className="text-uppercase">LOG IN</h2>
          </div>
          <div className="form-group mt-4 mb-4">
            <input
              type="tel"
              name="phone"
              placeholder="PHONE NUMBER"
              value={formData.phone}
              onChange={handleChange}
              style={{ textTransform: "uppercase" }}
            />
          </div>
          <div className="form-group mt-5">
            <input
              type="text"
              name="otp"
              placeholder="OTP"
              value={formData.otp}
              onChange={handleChange}
              style={{ textTransform: "uppercase" }}
            />
          </div>
          <div className="d-flex flex-column align-items-end mt-1">
            <button
              type="button"
              className="btn btn-link "
              onClick={handleGenerateOtp}
            >
              GENERATE OTP
            </button>
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
              LOG IN
            </button>
          </div>
          <div className="d-flex flex-column align-items-center mt-4">
            <p className="mt-2">
              Don't have an account?{" "}
              <a href="/" className="fw-bold">
                Sign up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
