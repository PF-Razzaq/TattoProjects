import React from "react";
import HeaderTop from "../TopHeader/HeaderTop";
import Sidebar from "../Sidebar/Sidebar";
import DashboardBusinessTarget from "./DashboardBusinessTarget/DashboardBusinessTarget";
import DashboardExpense from "./DashboardExpense/DashboardExpense";
import { FaCalendarAlt } from "react-icons/fa";

const Dashboard = () => {
  const data = [
    {
      customerName: "John Doe",
      service: "Web Development",
      paymentStatus: "Paid",
    },
    {
      customerName: "Jane Smith",
      service: "Graphic Design",
      paymentStatus: "Pending",
    },
    {
      customerName: "Mike Johnson",
      service: "SEO Optimization",
      paymentStatus: "Overdue",
    },
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
          <div className="mt-3">
            <DashboardBusinessTarget />
          </div>
          <div className="mt-3">
            <DashboardExpense />
          </div>
        </div>
        <div className="container me-5 mt-5">
          <table className="table table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>Name</th>
                <th>Business Name</th>
                <th>Leave Type</th>
                <th>From Date</th>
                <th>To Date</th>
                <th>Reason</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>Acme Corp</td>
                <td>Sick Leave</td>
                <td>2024-07-01</td>
                <td>2024-07-05</td>
                <td>Flu</td>
                <td>
                  <button className="btn btn-success btn-sm mr-2">
                    Accept
                  </button>
                  <button className="btn btn-danger btn-sm">Reject</button>
                </td>
              </tr>
              {/* Repeat <tr> block for each row */}
            </tbody>
          </table>
        </div>
        <div className="d-flex">
          <div
            className="container mt-5 text-center "
            style={{ width: "500px", marginLeft: "10rem" }}
          >
            <div className="card">
              <div className="card-header d-flex justify-content-between">
                <h5>Payout</h5>
                <div className="d-flex align-items-center">
                  <button className="btn btn-primary btn-sm mr-2">Today</button>
                  <button className="btn btn-secondary btn-sm mr-2">
                    Current Month
                  </button>
                  <FaCalendarAlt size={20} className="ml-2" />
                </div>
              </div>
              <div className="card-body">
                <div className="col-md-4 mb-3">
                  <div
                    className="d-flex ms-5 mt-3 justify-content-between"
                    style={{ width: "300px" }}
                  >
                    <div className="dashboard-item">
                      <div className="item-title">Total Service Served</div>
                      <div className="item-value border-shadow">00000</div>
                    </div>
                    <div className="dashboard-item">
                      <div className="item-title">Total Sale</div>
                      <div className="item-value border-shadow">00000</div>
                    </div>
                  </div>
                </div>
                <div
                  className="d-flex ms-5 mt-3 justify-content-between"
                  style={{ width: "300px" }}
                >
                  <div className="dashboard-item">
                    <div className="item-title">Team Target</div>
                    <div className="item-value border-shadow">00000</div>
                  </div>
                  <div className="dashboard-item">
                    <div className="item-title">Bonus</div>
                    <div className="item-value border-shadow">00000</div>
                  </div>
                </div>
                <div
                  className="d-flex ms-5 mt-3 justify-content-between"
                  style={{ width: "300px" }}
                >
                  <div className="dashboard-item">
                    <div className="item-title">Team Bonus</div>
                    <div className="item-value border-shadow">00000</div>
                  </div>
                  <div className="dashboard-item">
                    <div className="item-title">Total Expenses</div>
                    <div className="item-value border-shadow">00000</div>
                  </div>
                </div>

                <div className="ms-5 mt-3" style={{ width: "300px" }}>
                  <div className="item-title">Total Earns (Admin)</div>
                  <div className="item-value border-shadow">00000</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-50">
            <div className="container mt-5">
              <table className="table table-bordered">
                <thead className="thead-dark">
                  <tr>
                    <th>Customers Name</th>
                    <th>Service</th>
                    <th>Payment Status</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, index) => (
                    <tr key={index}>
                      <td>{row.customerName}</td>
                      <td>{row.service}</td>
                      <td>{row.paymentStatus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div>
          <div
            className="container mt-5 text-center "
            style={{ width: "500px", marginLeft: "10rem" }}
          >
            <div className="card">
              <div className="card-header d-flex justify-content-between">
                <h5>Payout</h5>
                <div className="d-flex align-items-center">
                  <button className="btn btn-primary btn-sm mr-2">Today</button>
                  <button className="btn btn-secondary btn-sm mr-2">
                    Current Month
                  </button>
                  <FaCalendarAlt size={20} className="ml-2" />
                </div>
              </div>
              <div>
                <h6>Tatto Studio Baner</h6>
              </div>
              <div className="card-body">
                <div className="col-md-4 mb-3">
                  <div
                    className="d-flex ms-5 mt-3 justify-content-between"
                    style={{ width: "300px" }}
                  >
                    <div className="dashboard-item">
                      <div className="item-title">Total Service Served</div>
                      <div className="item-value border-shadow">00000</div>
                    </div>
                    <div className="dashboard-item">
                      <div className="item-title">Total Sale</div>
                      <div className="item-value border-shadow">00000</div>
                    </div>
                  </div>
                </div>
                <div
                  className="d-flex ms-5 mt-3 justify-content-between"
                  style={{ width: "300px" }}
                >
                  <div className="dashboard-item">
                    <div className="item-title">Team Target</div>
                    <div className="item-value border-shadow">00000</div>
                  </div>
                  <div className="dashboard-item">
                    <div className="item-title">Bonus</div>
                    <div className="item-value border-shadow">00000</div>
                  </div>
                </div>
                <div
                  className="d-flex ms-5 mt-3 justify-content-between"
                  style={{ width: "300px" }}
                >
                  <div className="dashboard-item">
                    <div className="item-title">Team Bonus</div>
                    <div className="item-value border-shadow">00000</div>
                  </div>
                  <div className="dashboard-item">
                    <div className="item-title">Total Expenses</div>
                    <div className="item-value border-shadow">00000</div>
                  </div>
                </div>
                <div className="d-flex mt-3 mb-3 align-items-center">
                  <div className="ms-5">Target 1</div>
                  <div class="progress w-50 ms-5">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      aria-valuenow="50"
                      style={{ width: "50%" }}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="d-flex mt-3 mb-3 align-items-center">
                  <div className="ms-5">Target 2</div>
                  <div class="progress w-50 ms-5">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      aria-valuenow="75"
                      style={{ width: "75%" }}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="d-flex mt-3 mb-3 align-items-center">
                  <div className="ms-5">Target 3</div>
                  <div class="progress w-50 ms-5">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      aria-valuenow="25"
                      style={{ width: "25%" }}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>

                <div className="ms-5 mt-3" style={{ width: "300px" }}>
                  <div className="item-title">Total Earns (Admin)</div>
                  <div className="item-value border-shadow">00000</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
