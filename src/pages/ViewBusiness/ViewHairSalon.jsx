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
  return (
    <>
      <div>
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
    </>
  );
};

export default ViewHairSalon;
