import React from "react";
import "./BusinessDetail.css";
import HeaderTop from "../TopHeader/HeaderTop";
import Sidebar from "../Sidebar/Sidebar";
import cut from "../../assets/images/cut.png";
import { FaArrowLeft } from "react-icons/fa";
const BusinessDetail = () => {
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
          <div className="w-100 shadow-block m-2">
            <div className="w-100">
              <div className="mt-5  mb-0" style={{ marginLeft: "5rem" }}>
                <span className="me-3">
                  <FaArrowLeft />
                </span>
                Business Detail
              </div>
              <div className="card3">
                <div className="sec1">
                  <img src={cut} alt="" />
                </div>

                <div className="sec2">
                  <h4>Hair Saloon</h4>
                  <h2>Relax Man Parlour</h2>

                  <a href="">www.dummy.com</a>
                </div>
              </div>
            </div>
            <div className="mt-3" style={{ marginLeft: "5rem" }}>
              <p className="fw-bold">Personal Detail</p>
              <div className="d-flex">
                <p className="me-4">CONTACT NUMBER</p>
                <p>030303030303</p>
              </div>
              <div className="d-flex">
                <p className="me-5">EMAIL ADDRESS</p>
                <p>ABDUL@GMAIL.COM</p>
              </div>
              <div className="d-flex">
                <p className="me-5">HOME ADDRESS</p>
                <p>LAHORE</p>
              </div>
            </div>
            <div className="mt-3" style={{ marginLeft: "5rem" }}>
              <p>SOCIAL MEDIA LINK</p>
              <div className="d-flex">
                <p className="me-5 shadow-custom">INSTAGRAM</p>
                <p className="shadow-custom">www.instagram.com</p>
              </div>
              <div className="d-flex">
                <p className="me-5 shadow-custom">FACEBOOK</p>
                <p className="shadow-custom">www.facebook.com</p>
              </div>
              <div className="d-flex">
                <p className="me-5 shadow-custom">WhatsApp</p>
                <p className="shadow-custom">www.whatsapp.com</p>
              </div>
            </div>
            <div>
              <p className="mt-3" style={{ marginLeft: "5rem" }}>
                SERVES
              </p>
              <div className="card3">
                <div className="sec1">
                  <img src={cut} alt="" />
                </div>

                <div className="sec2">
                  <p>Hair </p>
                  <p className="fw-bold">Relax SPA</p>
                  <p className="shadow-custom w-75">
                    lahore,central park ,kasur road, 54000{" "}
                  </p>
                  <div className="w-75 d-flex justify-content-between">
                    <p className="me-5 shadow-custom">lahore,central park</p>{" "}
                    <p className="shadow-custom">lahore,central park</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3" style={{ marginLeft: "5rem" }}>
              <p>TEAM MEMBER</p>
              <div className="container mt-4">
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

export default BusinessDetail;
