import React from "react";
import login from "../assets/login.png";

const Settings = () => {
  return (
    <div className="container">
      <div className="row">
       <div className="section__title page__title">
        Settings
       </div>
       <div className="settings__login--wrapper">
        <img alt="login" src={login} />
        .settins
       </div>

      </div>
    </div>
  );
};

export default Settings;