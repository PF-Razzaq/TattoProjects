import React from "react";
import HeaderTop from "../TopHeader/HeaderTop";
import Sidebar from "../Sidebar/Sidebar";
import "./BusinessExpense.css";
import { CiSearch } from "react-icons/ci";

const BusinessExpense = () => {
  const data = [
    { id: 1, name: "John Doe", destination: "Paris", serves: "Europe" },
    { id: 2, name: "Jane Smith", destination: "Tokyo", serves: "Asia" },
    // Add more data as needed
  ];
  return (
    <>
      <div>
        <div>
          <HeaderTop />
        </div>
        <div className="d-flex">
          <div>
            <Sidebar />
          </div>
          <div className="w-100">
            <div className="expense-container container">
              <h2 className="expense-header">Add Business Expense</h2>
              <div className="expense-form bg-light p-4 mt-3">
                <div className="expense-types d-flex mb-3 w-50 justify-content-between">
                  <div className="expense-type d-flex">
                    <input
                      type="checkbox"
                      id="expense-fine"
                      className="expense-checkbox me-2"
                    />
                    <label htmlFor="expense-fine" className="expense-label">
                      Fine
                    </label>
                  </div>
                  <div className="expense-type d-flex align-items-center">
                    <input
                      type="checkbox"
                      id="expense-reward"
                      className="expense-checkbox me-2"
                    />
                    <label htmlFor="expense-reward" className="expense-label">
                      Reward
                    </label>
                  </div>
                  <div className="expense-type d-flex align-items-center">
                    <input
                      type="checkbox"
                      id="expense-advance"
                      className="expense-checkbox me-2"
                    />
                    <label htmlFor="expense-advance" className="expense-label">
                      Advance
                    </label>
                  </div>
                </div>
                <div className="expense-details row d-flex mt-5">
                  <div className="col-md-3 mb-3">
                    <label className="expense-label">Select Business</label>
                    <select
                      name=""
                      id=""
                      value=""
                      className="expense-amount form-control mt-2"
                    >
                      <option value="Business List">Business List</option>
                      <option value="Business List">Business List</option>
                      <option value="Business List">Business List</option>
                      <option value="Business List">Business List</option>
                    </select>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label className="expense-label">Total Amount</label>
                    <input
                      type="text"
                      className="expense-amount form-control mt-2"
                    />
                  </div>
                  <div className="col-md-3 mb-3">
                    <label className="expense-label">Upload Invoice</label>
                    <input
                      type="file"
                      className="expense-upload form-control mt-2"
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <button className="expense-save  btn btn-dark mt-4 ms-0">
                    Save
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="mt-3" style={{ marginLeft: "1rem" }}>
                <p className="ms-3">TEAM MEMBER</p>
                <div className="container mt-4">
                  <div className="row mb-3 d-flex justify-content-between">
                    <div className="col-md-7">
                      <div className="input-group">
                        <span className="input-group-text">
                          <CiSearch />
                        </span>
                        <input
                          type="text"
                          className="form-control expense-border"
                          placeholder="Search Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-2">
                      <input
                        type="month"
                        className="form-control"
                        placeholder="Month"
                      />
                    </div>
                    <div className="col-md-2">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Year"
                        min="1900"
                        max="2100"
                      />
                    </div>
                  </div>
                  <table className="table border">
                    <thead className="thead-dark">
                      <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Destination</th>
                        <th>Serves</th>
                        <th>View</th>
                        <th>Edit</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((row) => (
                        <tr key={row.id}>
                          <td>
                            <div
                              style={{
                                width: "30px",
                                height: "30px",
                                borderRadius: "50%",
                                background: "linear-gradient(pink,yellow)",
                              }}
                            ></div>
                          </td>
                          <td>{row.name}</td>
                          <td>{row.destination}</td>
                          <td>{row.serves}</td>
                          <td>
                            <button className="btn btn-primary">View</button>
                          </td>
                          <td>
                            <button className="btn btn-success">Edit</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="expense-container container">
              <h2 className="expense-header">Add Expense</h2>
              <div className="expense-form bg-light p-4 mt-3">
                <div className="expense-types d-flex mb-3 w-50 justify-content-between">
                  <div className="expense-type d-flex">
                    <input
                      type="checkbox"
                      id="expense-fine"
                      className="expense-checkbox me-2"
                    />
                    <label htmlFor="expense-fine" className="expense-label">
                      Fine
                    </label>
                  </div>
                  <div className="expense-type d-flex align-items-center">
                    <input
                      type="checkbox"
                      id="expense-reward"
                      className="expense-checkbox me-2"
                    />
                    <label htmlFor="expense-reward" className="expense-label">
                      Reward
                    </label>
                  </div>
                  <div className="expense-type d-flex align-items-center">
                    <input
                      type="checkbox"
                      id="expense-advance"
                      className="expense-checkbox me-2"
                    />
                    <label htmlFor="expense-advance" className="expense-label">
                      Advance
                    </label>
                  </div>
                </div>
                <div className="expense-details row d-flex mt-5">
                  <div className="col-md-3 mb-3">
                    <label className="expense-label">Select Business</label>
                    <select
                      name=""
                      id=""
                      value=""
                      className="expense-amount form-control mt-2"
                    >
                      <option value="Business List">Business List</option>
                      <option value="Business List">Business List</option>
                      <option value="Business List">Business List</option>
                      <option value="Business List">Business List</option>
                    </select>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label className="expense-label">Select Name</label>
                    <select
                      name=""
                      id=""
                      value=""
                      className="expense-amount form-control mt-2"
                    >
                      <option value="Business List">Business Name</option>
                      <option value="Business List">Business Name</option>
                      <option value="Business List">Business Name</option>
                      <option value="Business List">Business Name</option>
                    </select>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label className="expense-label">Total Amount</label>
                    <input
                      type="text"
                      className="expense-amount form-control mt-2"
                    />
                  </div>
                  <div className="col-md-3 mb-3">
                    <label className="expense-label">Upload Invoice</label>
                    <input
                      type="file"
                      className="expense-upload form-control mt-2"
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-end w-75">
                  <button className="expense-save  btn btn-dark mt-4 ms-0">
                    Save
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-3" style={{ marginLeft: "1rem" }}>
              <p className="ms-3">TEAM MEMBER</p>
              <div className="container mt-4">
                <div className="row mb-3 d-flex justify-content-between">
                  <div className="col-md-7">
                    <div className="input-group">
                      <span className="input-group-text">
                        <CiSearch />
                      </span>
                      <input
                        type="text"
                        className="form-control expense-border"
                        placeholder="Search Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-2">
                    <input
                      type="month"
                      className="form-control"
                      placeholder="Month"
                    />
                  </div>
                  <div className="col-md-2">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Year"
                      min="1900"
                      max="2100"
                    />
                  </div>
                </div>
                <table className="table border">
                  <thead className="thead-dark">
                    <tr>
                      <th></th>
                      <th>Name</th>
                      <th>Destination</th>
                      <th>Serves</th>
                      <th>View</th>
                      <th>Edit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((row) => (
                      <tr key={row.id}>
                        <td>
                          <div
                            style={{
                              width: "30px",
                              height: "30px",
                              borderRadius: "50%",
                              background: "linear-gradient(pink,yellow)",
                            }}
                          ></div>
                        </td>
                        <td>{row.name}</td>
                        <td>{row.destination}</td>
                        <td>{row.serves}</td>
                        <td>
                          <button className="btn btn-primary">View</button>
                        </td>
                        <td>
                          <button className="btn btn-success">Edit</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessExpense;
