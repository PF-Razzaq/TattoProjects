import React from "react";

const DashboardExpense = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div>Add Expenses</div>
          <div className="container mt-5">
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control div-3 mb-3"
                  placeholder="Expense Type"
                />
              </div>
              <div className="form-group">
                <input
                  type="number"
                  className="form-control div-4 mb-3"
                  placeholder="Amount"
                />
              </div>
              <div className="form-group">
                <input
                  type="file"
                  className="form-control-file div-5 mb-3"
                  placeholder="Upload Invoice"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control div-7 mb-3"
                  placeholder="Description"
                />
              </div>
              <div className="form-group div-8 mb-3">
                {/* Additional fields or styling */}
              </div>
              <button type="submit" className="btn btn-primary div-9">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const InputField = ({ className, label }) => {
  return (
    <div className={`border rounded p-3 ${className}`}>
      <label className="text-capitalize">{label}</label>
      <input type="text" className="form-control" />
    </div>
  );
};

const ImageField = ({ className }) => {
  return (
    <div
      className={`border rounded p-3 d-flex align-items-center justify-content-center ${className}`}
    >
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c23c89f31bb3d234f30e917c241b76311650491b1660043270c437b192e3a8dc?apiKey=15012db4207446929dd42c5e3e02ffb2&"
        alt="Placeholder"
        className="img-fluid"
      />
    </div>
  );
};

const SubmitButtons = ({ className }) => {
  return (
    <div className={`d-flex ${className}`}>
      <button className="btn btn-primary">Submit</button>
      <button className="btn btn-secondary">Add More</button>
    </div>
  );
};

export default DashboardExpense;
