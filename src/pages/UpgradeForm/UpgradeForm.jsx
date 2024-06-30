import React from "react";
import "./UpgradeForm.css";

function UpgradeForm() {
  return (
    <form className="form-wrapper">
      <div className="form-inner-wrapper">
        <div className="main-content">
          <div className="column-1">
            <div className="info-wrapper">
              <div className="name-wrapper">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  className="input"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  className="input"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input"
              />
              <input
                type="text"
                name="username"
                placeholder="Username / Salesperson name"
                className="input"
              />
            </div>
          </div>
          <div className="column-2">
            <img
              srcSet="..."
              className="profile-image"
              alt="Profile"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <input
        type="text"
        name="contactDetails"
        placeholder="Contact details"
        className="input"
      />
      <input
        type="text"
        name="addressDetails"
        placeholder="Address details"
        className="input"
      />
      <input type="date" name="dob" placeholder="DOB" className="input dob" />

      <div className="upload-documents">
        <label htmlFor="verification-documents">
          Upload verification documents (any business proof)
        </label>
        <input
          type="file"
          id="verification-documents"
          name="verificationDocuments"
          className="input"
        />
      </div>
      <input
        type="text"
        name="businessName"
        placeholder="Add business / Business name"
        className="input"
      />
      <div className="additional-info"></div>
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
}

export default UpgradeForm;
