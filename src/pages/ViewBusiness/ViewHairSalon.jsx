import React from "react";
import "./ViewBusiness.css";
import whatsapp from "../../assets/images/whatsapp.png";
import star from "../../assets/images/star.png";
import share from "../../assets/images/share.png";
import web from "../../assets/images/web.png";
import insta from "../../assets/images/insta.png";
import face from "../../assets/images/face.png";
import cut from "../../assets/images/cut.png";

const ViewHairSalon = () => {
  const data = [
    { id: 1, name: "John Doe", destination: "Paris", serves: "Europe" },
    { id: 2, name: "Jane Smith", destination: "Tokyo", serves: "Asia" },
    // Add more data as needed
  ];
  return (
    <>
      <div className="border-shadow">
        <div>
          <div className="d-flex gap-3 ms-5">
            <button className="view-btn">ADD TEAM</button>
            <button className="view-btn">TEAM CONFIGURATION</button>
            <button className="view-btn">SERVICE CONFIGURATION</button>
          </div>
          <div className="card3">
            <div className="sec1">
              <img src={cut} alt="" />
            </div>

            <div className="sec2">
              <h4>Hair Saloon</h4>
              <h2>Relax Man Salon</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias doloribus, odit optio architecto repudiandae deleniti
                inventore quos cum impedit repellat.
              </p>
              <div className="up">
                <img src={web} className="social-icons" alt="" />

                <img src={insta} className="social-icons" alt="" />

                <img src={face} className="social-icons" alt="" />

                <img src={whatsapp} className="social-icons" alt="" />

                <img src={share} className="social-icons" alt="" />
              </div>
            </div>
            <div className="sec3"></div>
          </div>
          <div className="card3">
            <div className="sec1">
              <img src={cut} alt="" />
            </div>

            <div className="sec2">
              <h4>Hair Saloon</h4>
              <h2>Relax Man Salon</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias doloribus, odit optio architecto repudiandae deleniti
                inventore quos cum impedit repellat.
              </p>
              <div className="up">
                <img src={web} className="social-icons" alt="" />

                <img src={insta} className="social-icons" alt="" />

                <img src={face} className="social-icons" alt="" />

                <img src={whatsapp} className="social-icons" alt="" />

                <img src={share} className="social-icons" alt="" />
              </div>
            </div>
            <div className="sec3"></div>
          </div>
          <div className="card3">
            <div className="sec1">
              <img src={cut} alt="" />
            </div>

            <div className="sec2">
              <h4>Hair Saloon</h4>
              <h2>Relax Man Salon</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias doloribus, odit optio architecto repudiandae deleniti
                inventore quos cum impedit repellat.
              </p>
              <div className="up">
                <img src={web} className="social-icons" alt="" />

                <img src={insta} className="social-icons" alt="" />

                <img src={face} className="social-icons" alt="" />

                <img src={whatsapp} className="social-icons" alt="" />

                <img src={share} className="social-icons" alt="" />
              </div>
            </div>
            <div className="sec3"></div>
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
          <div className="d-flex justify-content-end">
            <button className="btn px-5" style={{ border: "1px solid black" }}>
              ADD TEAM
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewHairSalon;
