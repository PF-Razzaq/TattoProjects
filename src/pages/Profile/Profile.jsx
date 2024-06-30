import React from "react";
import HeaderTop from "../TopHeader/HeaderTop";
import Sidebar from "../Sidebar/Sidebar";
import UpgradeForm from "../UpgradeForm/UpgradeForm";

const Profile = () => {
  return (
    <>
      <div>
        <div>
          <HeaderTop />
        </div>
        <div className="d-flex justify-content-between mt-5">
          <div>
            <Sidebar />
          </div>
          <div className="w-100 ms-5">
            <UpgradeForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
